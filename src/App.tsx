import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";


function App() {
    return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  )

}

export default App
