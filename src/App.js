import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Errors from "./pages/Errors/Errors"
import Logement from "./pages/logement/logement"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="*" element={<Errors />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/logements/:logementId" element={<Logement/>}/>
      </Routes>
      <Footer/>
  </Router>
  );
}

export default App;
