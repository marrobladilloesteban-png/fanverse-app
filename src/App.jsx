import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Catalogo from "./pages/Catalogo";
import QuienesSomos from "./pages/QuienesSomos";
import MisionVision from "./pages/MisionVisionPage";
import Contacto from "./pages/Contacto";
import Albumes from "./pages/Albumes";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import { AuthProvider } from "./auth/AuthProvider.jsx"; // 👈 Agregado correctamente

export default function App() {
  return (
    <BrowserRouter>
      {/* ✅ Ahora AuthProvider envuelve toda la app */}
      <AuthProvider>
        <Navbar />

        {/* FONDO GENERAL DEGRADADO */}
          <div className="relative min-h-screen my-5 bg-gradient-to-r from-pink-400 to-indigo-400 text-white transition-all duration-300 ease-in-out">
          <Routes>
            {/* 🌸 RUTAS PÚBLICAS */}
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo/*" element={<Catalogo />} />
            <Route path="/quienes" element={<QuienesSomos />} />
            <Route path="/mision-vision" element={<MisionVision />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/catalogo/albumes" element={<Albumes />} />

            {/* 🌸 LOGIN */}
            <Route path="/login" element={<Login />} />

            {/* 🌸 RUTA PROTEGIDA */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* 🌸 404 */}
            <Route path="*" element={<div className="p-6 text-center">404 - Página no encontrada</div>} />
          </Routes>
        </div>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}
