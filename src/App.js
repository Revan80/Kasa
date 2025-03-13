import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Errors from "./pages/Errors/Erros"
import Logement from "./pages/logement/logement"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/logements/:logement" element={<Logement/>}/>
        <Route path="/Errors" element={<Errors />}/>
      </Routes>
      <Footer/>
   
  </Router>
  );
}

export default App;
