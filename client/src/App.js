import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Infrastructure from './components/Infrastructure';
import Academic from './components/Academic';
import Features from './components/Features';
import ContactUs from './components/ContactUs';
import NewsAndEvents from './components/NewsAndEvents';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <About/>
      {/* <Login /> */}
      {/* <Infrastructure/> */}
      
      <Features/>
      <Academic/> 
      <NewsAndEvents/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
