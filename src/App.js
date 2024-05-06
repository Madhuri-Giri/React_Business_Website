
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Blog/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
