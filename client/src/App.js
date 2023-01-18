import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Infrastructure from './components/Infrastructure';
import Academic from './components/Academic';
import ContactUs from './components/ContactUs';
import {Route, Router, RouterProvider, Routes} from 'react-router-dom';
import StuDashboard from './components/dashboard/student/StuDashboard';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<><Header /><Home /><Footer /></>} />
        <Route path='/about' element={<><Header /><About /><Footer /></>} />
        <Route path='/infrastructure' element={<><Header /><Infrastructure /><Footer /></>} />
        <Route path='/contactUs' element={<><Header /><ContactUs /><Footer /></>} />
        <Route path='/academic' element={<><Header /><Academic /><Footer /></>} />
        <Route path='/login' element={<><Header /><Login /><Footer /></>} />
        
        {/* Supposed to be a protected page will change it later first building ui*/}
        <Route path='/students/dashboard' element={<StuDashboard />} />
        
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </div>
  );
}

/*aise bhi kar sakte
const router = createBrowserRouter([
  {
    path: "/",
    element: [<Header />,<Home />,<Footer />]
  },
  {
    path: "/about",
    element: [<Header />,<About />,<Footer />]
  },
  {
    path: "/infrastructure",
    element: [<Header />,<Infrastructure />,<Footer />]
  },
  {
    path: "/contactUs",
    element: [<Header />,<ContactUs />,<Footer />]
  },
  {
    path: "/academic",
    element: [<Header />,<Academic />,<Footer />]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/students/dashboard",
    element: <StuDashboard />
  }
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return <RouterProvider router={router} />;
}*/
