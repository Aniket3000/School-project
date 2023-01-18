const express = require('express')
const app = express()
const mongoClient = require('mongodb');
const dotevn = require('dotenv');
const PORT = 3001;

app.use(express.json());

app.get('/',(req,res) => {
  res.send('hello')
})

dotevn.config();

// mvc 

// 


async function setup(){
  const uri = process.env.MONGODB_URI;
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
  let client;
  let clientPromise;
  if(!process.env.MONGODB_URI){
    throw new Error('Please add your mongodb uri to env');
  }
  client = new mongoClient.MongoClient(uri, options);
  clientPromise = client.connect();
  client = await clientPromise;
  // const isConnected = await client.isConnected();
  const db = client.db("school");
  const collection = db.collection("students");
  const products = await collection.find({}).toArray();
  console.log(products)
}

// setup();


app.listen(PORT, () => {
  console.log("running")
})