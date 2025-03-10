import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import MyNavBar from './component/MyNavBar';
import Footer from './component/Footer';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
