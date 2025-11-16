import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import './App.css';
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Histoire from "./pages/Histoire";
import Menu from "./pages/Menu";
import Restaurants from "./pages/Restaurants";
import MonCompte from "./pages/MonCompte";
import Franchise from "./pages/Franchise";
import Footer from "./components/Footer/Footer";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";


function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/moncompte" element={<MonCompte />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  )

}

export default App