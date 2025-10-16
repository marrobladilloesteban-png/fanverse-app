import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Catalogo from "./pages/Catalogo";
import QuienesSomos from "./pages/QuienesSomos";
import MisionVision from "./pages/MisionVision";
import Contacto from "./pages/Contacto";
import Albumes from "./pages/Albumes";




export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* FONDO GENERAL DEGRADADO */}
      <div className="absolute left-0 right-0 mt-2 bg-white text-indigo-700 rounded-lg shadow-md z-10 transition-all duration-300 ease-in-out animate-fadeIn min-h-screen bg-gradient-to-r from-pink-400 to-indigo-400 text-white">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/catalogo/*" element={<Catalogo />} />
          <Route path="/quienes" element={<QuienesSomos />} />
          <Route path="/mision-vision" element={<MisionVision />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/catalogo/albumes" element={<Albumes />} />

        </Routes>
      </div>
      

      <Footer />
    </BrowserRouter>
    

  );
}




