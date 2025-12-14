import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
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
import CarritoLateral from "./components/CarritoLateral.jsx";
import { AuthProvider } from "./auth/AuthProvider.jsx"; // 👈 Agregado correctamente
import Profile from "./pages/Profile.jsx"; // ✅ NUEVO IMPORT
import FreshDrops from "./pages/FreshDrops.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Carrito from "./pages/Carrito.jsx";


export default function App() {
  return (
    <BrowserRouter>
      {/* ✅ Ahora AuthProvider envuelve toda la app */}
      <AuthProvider>
        <CartProvider>
        <Navbar />
        <CarritoLateral />


        {/* FONDO GENERAL DEGRADADO */}
        <div className="relative min-h-screen bg-gradient-to-r from-pink-400 to-indigo-400 text-white transition-all duration-300 ease-in-out">
          <Routes>
            {/* 🌸 RUTAS PÚBLICAS */}
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo/*" element={<Catalogo />} />
            <Route path="/quienes" element={<QuienesSomos />} />
            <Route path="/mision-vision" element={<MisionVision />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/catalogo/albumes" element={<Albumes />} />
            <Route path="/fresh-drops" element={<FreshDrops />}></Route>
            <Route path="/carrito" element={<Carrito />} />


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

            {/* ✅ NUEVA RUTA PROTEGIDA: PERFIL */}
            <Route
              path="/perfil"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* Fallback*/}
            <Route path="*" element={<Navigate to="/fresh-drops" replace />} />

            
          </Routes>
        </div>

        <Footer />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
