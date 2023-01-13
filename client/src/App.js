import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Infrastructure from './components/Infrastructure';
import Academic from './components/Academic';
import ContactUs from './components/ContactUs';
import {createBrowserRouter, Outlet, Route, Router, RouterProvider, Routes} from 'react-router-dom';

// aise bhi kar sakte
// export default function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path='/' element={<><Header /><Home /></>} />
//         {/* <About/> */}
//         {/* <Login /> */}
//         {/* <Infrastructure/> */}
//         {/* <Academic/>  */}
//         {/* <ContactUs/> */}
//       </Routes>
//     </div>
//   );
// }

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
    element: <Login />
  }
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return <RouterProvider router={router} />;
}
