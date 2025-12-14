import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X, Search } from "lucide-react";

import logo from "../assets/logo.png";
import { useAuth } from "../auth/AuthProvider";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { user, logout } = useAuth();
  const { carrito, abrirCarrito } = useCart();
  const navigate = useNavigate();

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/catalogo", label: "Catálogo" },
    { to: "/fresh-drops", label: "Fresh Drops" },
    { to: "/quienes", label: "Quiénes somos" },
    { to: "/contacto", label: "Contacto" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/catalogo?search=${encodeURIComponent(search)}`);
    setSearch("");
    setSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      {/* 🔹 BARRA PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Fanverse" className="h-12 object-contain" />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-purple-600"
                    : "text-gray-700 hover:text-purple-500"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* ACCIONES */}
        <div className="flex items-center gap-3">
          
          {/* BUSCADOR */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Search size={20} />
          </button>

          {/* 🛒 CARRITO (SIEMPRE VISIBLE) */}
          <button
            onClick={abrirCarrito}
            className="relative p-2 rounded-full hover:bg-gray-100"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>

          {/* USUARIO DESKTOP */}
          {user ? (
            <button
              onClick={logout}
              className="hidden lg:block text-sm px-3 py-1 border rounded hover:bg-gray-100"
            >
              Cerrar sesión
            </button>
          ) : (
            <Link
              to="/login"
              className="hidden lg:block text-sm px-4 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Login
            </Link>
          )}

          {/* MENÚ MÓVIL */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* 🔍 BUSCADOR */}
      <AnimatePresence>
        {searchOpen && (
          <motion.form
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSearch}
            className="bg-white border-t px-4 py-3 flex gap-2"
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar productos..."
              className="flex-1 border rounded px-3 py-2"
            />
            <button className="bg-purple-600 text-white px-4 rounded">
              Buscar
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* 📱 MENÚ MÓVIL */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 text-gray-700 hover:text-purple-600"
                >
                  {link.label}
                </NavLink>
              ))}

              {user ? (
                <button
                  onClick={logout}
                  className="mt-2 py-2 border rounded"
                >
                  Cerrar sesión
                </button>
              ) : (
                <Link
                  to="/login"
                  className="mt-2 py-2 bg-purple-600 text-white rounded text-center"
                >
                  Login
                </Link>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
