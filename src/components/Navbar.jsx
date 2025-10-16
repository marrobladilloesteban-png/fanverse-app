import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/catalogo?search=${encodeURIComponent(search)}`);
      setSearch("");
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/catalogo", label: "Catálogo" },
    { to: "/quienes", label: "Quiénes somos" },
    { to: "/mision-vision", label: "Misión y Visión" },
    { to: "/contacto", label: "Contáctanos" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-30 h-20 rounded-lg" />
          <span className="font-bold text-lg text-gray-700"></span>
        </div>

        {/* LINKS DESKTOP */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive
                    ? "bg-purple-500 text-white"
                    : "text-gray-700 hover:bg-pink-100"
                }`
              }
              end
            >
              {link.label}
            </NavLink>
          ))}
          <form onSubmit={handleSubmit} className="flex">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar..."
              className="px-3 py-1.5 border rounded-l-md focus:ring-2 focus:ring-purple-300"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-purple-600 text-white rounded-r-md"
            >
              Buscar
            </button>
          </form>
        </nav>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MENÚ MÓVIL CON ANIMACIÓN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="flex flex-col items-start p-4 gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `w-full px-3 py-2 rounded-md ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-blue-100"
                    }`
                  }
                  end
                >
                  {link.label}
                </NavLink>
              ))}
              <form onSubmit={handleSubmit} className="w-full mt-2 flex">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar..."
                  className="w-full px-3 py-2 border rounded-l-md focus:ring-2 focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-blue-600 text-white rounded-r-md"
                >
                  Buscar
                </button>
              </form>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
