import React, { useState } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { useAuth } from "../auth/AuthProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/catalogo?search=${encodeURIComponent(search)}`);
      setSearch("");
      setSearchOpen(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/cursos");
  };

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/catalogo", label: "Catálogo" },
    { to: "/FreshDrops", label: "FreshDrops" },
    { to: "/quienes", label: "Quiénes somos" },
    { to: "/mision-vision", label: "Misión y Visión" },
    { to: "/contacto", label: "Contáctanos" },
  ];

  const isActive = (path) =>
    location.pathname === path ? "text-purple-600 font-semibold" : "text-gray-700";

  return (
    <header className="bg-white shadow-md sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 min-w-[120px]">
          <img
            src={logo}
            alt="Logo"
            className="w-24 h-16 object-contain rounded-lg"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/100x60?text=Logo";
            }}
          />
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition ${
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

          {/* USUARIO + BUSCADOR */}
          <div className="flex items-center gap-3 ml-4">
            {user ? (
              <>
                <span className="text-sm text-gray-600 truncate max-w-[150px]">
                  {user.displayName || user.email}
                </span>
                <Link
                  to="/dashboard"
                  className={`px-3 py-1.5 rounded text-sm font-medium ${isActive(
                    "/dashboard"
                  )}`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/perfil"
                  className={`px-3 py-1.5 rounded border text-sm hover:bg-gray-100 ${isActive(
                    "/perfil"
                  )}`}
                >
                  Perfil
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 rounded-full border text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-3 py-1.5 rounded-full bg-purple-500 text-white text-sm hover:bg-purple-600"
              >
                Iniciar sesión
              </Link>
            )}

            {/* ÍCONO DE BÚSQUEDA (AL FINAL) */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-pink-100 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* MENÚ MÓVIL */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* ANIMACIÓN BUSCADOR */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-md border-t border-gray-200"
          >
            <form
              onSubmit={handleSubmit}
              className="max-w-4xl mx-auto flex items-center justify-between gap-2 px-6 py-3"
            >
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar productos..."
                className="flex-1 border rounded-md px-3 py-2 focus:ring-2 focus:ring-purple-300"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
              >
                Buscar
              </button>
            </form>

            {/* FILTRO ALFABÉTICO */}
            <div className="flex flex-wrap justify-center gap-1 pb-3">
              {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letra) => (
                <button
                  key={letra}
                  onClick={() => navigate(`/catalogo?letra=${letra}`)}
                  className="px-2 py-1 text-sm text-gray-700 hover:bg-pink-100 rounded"
                >
                  {letra}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-md"
          >
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `w-full px-3 py-2 rounded-md text-sm ${
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

              {/* USUARIO EN MÓVIL */}
              <div className="w-full mt-3">
                {user ? (
                  <>
                    <p className="text-gray-700 mb-2 truncate">
                      {user.displayName || user.email}
                    </p>
                    <Link
                      to="/dashboard"
                      onClick={() => setMenuOpen(false)}
                      className="block w-full text-center px-3 py-2 bg-purple-500 text-white rounded-md mb-2"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/perfil"
                      onClick={() => setMenuOpen(false)}
                      className="block w-full text-center px-3 py-2 border rounded-md mb-2"
                    >
                      Perfil
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMenuOpen(false);
                      }}
                      className="block w-full px-3 py-2 border rounded-md text-sm"
                    >
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-center px-3 py-2 bg-purple-500 text-white rounded-md"
                  >
                    Iniciar sesión
                  </Link>
                )}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;



