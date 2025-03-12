require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["teacher", "student"], required: true },
});

const User = mongoose.model("User", userSchema);

// Attendance Schema
const attendanceSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ["present", "absent"], required: true },
});
// Assignment Schema
const assignmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date,
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  submissions: [
    {
      studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      fileUrl: String,
      submittedAt: { type: Date, default: Date.now },
    },
  ],
});

const Assignment = mongoose.model("Assignment", assignmentSchema);
const Attendance = mongoose.model("Attendance", attendanceSchema);

// Middleware for authentication
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid Token" });
  }
};

// Register User (Student/Teacher)
app.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword, role });

  await user.save();
  res.json({ message: "User registered successfully!" });
});

// Login User & Generate JWT
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid password" });

  const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Mark Attendance (Teacher Only)
app.post("/attendance", authMiddleware, async (req, res) => {
  if (req.user.role !== "teacher") return res.status(403).json({ error: "Access Denied" });

  const { studentId, status } = req.body;
  const attendance = new Attendance({ studentId, status });

  await attendance.save();
  res.json({ message: "Attendance marked successfully!" });
});

// View Attendance (Student Only)
app.get("/attendance", authMiddleware, async (req, res) => {
  if (req.user.role !== "student") return res.status(403).json({ error: "Access Denied" });

  const attendanceRecords = await Attendance.find({ studentId: req.user.userId });
  res.json(attendanceRecords);
});


// Create Assignment (Teacher Only)
app.post("/assignments", authMiddleware, async (req, res) => {
  if (req.user.role !== "teacher") return res.status(403).json({ error: "Access Denied" });

  const { title, description, dueDate } = req.body;
  const assignment = new Assignment({ title, description, dueDate, teacherId: req.user.userId });

  await assignment.save();
  res.json({ message: "Assignment created successfully!" });
});

// Get All Assignments (For Students & Teachers)
app.get("/assignments", authMiddleware, async (req, res) => {
  const assignments = await Assignment.find();
  res.json(assignments);
});

// Delete Assignment (Teacher Only)
app.delete("/assignments/:id", authMiddleware, async (req, res) => {
  if (req.user.role !== "teacher") return res.status(403).json({ error: "Access Denied" });

  await Assignment.findByIdAndDelete(req.params.id);
  res.json({ message: "Assignment deleted successfully!" });
});

// File Upload Setup (Multer for Submission)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Submit Assignment (Student Only)
app.post("/assignments/:id/submit", authMiddleware, upload.single("file"), async (req, res) => {
  if (req.user.role !== "student") return res.status(403).json({ error: "Access Denied" });

  const assignment = await Assignment.findById(req.params.id);
  if (!assignment) return res.status(404).json({ error: "Assignment not found" });

  assignment.submissions.push({ studentId: req.user.userId, fileUrl: req.file.path });
  await assignment.save();

  res.json({ message: "Assignment submitted successfully!" });
});

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
