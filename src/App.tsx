import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Histoire from "./pages/Histoire";
import Menu from "./pages/Menu";
import Restaurants from "./pages/Restaurants";
import MonCompte from "./pages/MonCompte";
import Franchise from "./pages/Franchise";
import Footer from "./components/Footer/Footer";


function App() {
    return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/moncompte" element={<MonCompte />} />
        </Routes>
        <Footer />
    </div>
  )

}

export default App
