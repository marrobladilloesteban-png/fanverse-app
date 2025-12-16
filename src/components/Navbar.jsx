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
    { to: "/", label: "Banner" },
    {to: "/banner", label: "Inicio"},
    { to: "/catalogo", label: "Catálogo" },
    { to: "/fresh-drops", label: "Fresh Drops" },
    { to: "/quienes", label: "Quiénes somos" },
    { to: "/mision-vision", label: "Misión y Visión" },
    { to: "/contacto", label: "Contacto" },
    { to: "/dashboard", label: "Dashboard" },
    

  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/catalogo?search=${encodeURIComponent(search)}`);
    setSearch("");
    setSearchOpen(false);
  };

  const getInitial = () => {
    if (user?.displayName) return user.displayName.charAt(0).toUpperCase();
    if (user?.email) return user.email.charAt(0).toUpperCase();
    return "?";
  };
  const getAvatarColor = () => {
    const text = user?.displayName || user?.email || "U";

    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }

    const colors = [
      "bg-purple-600",
      "bg-pink-600",
      "bg-indigo-600",
      "bg-blue-600",
      "bg-emerald-600",
      "bg-teal-600",
      "bg-rose-600",
      "bg-orange-500",
    ];

    return colors[Math.abs(hash) % colors.length];
  };



  return (
    <header className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-md">
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
                `px-4 py-2 rounded-md text-sm foont-medium transition-all duration-300 ${isActive
                  ? "bg-purple-300 text-black"
                  : "text-white hover:bg-purple-300 hover:text-black"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* ACCIONES DERECHA */}
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
            className="relative p-2 rounded-full hover:bg-purple-300/60 transition"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs
                               w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>

          {/* 👋 NOMBRE DEL USUARIO (ANTES DEL BOTÓN) */}
          {user && (
            <div className="hidden lg:flex items-center gap-2">
              <div
                className={`w-9 h-9 rounded-full text-white
                  flex items-center justify-center
                  font-semibold text-sm ${getAvatarColor()}`}
              >
                {getInitial()}
              </div>

              <span className="text-sm text-gray-700 max-w-[120px] truncate">
                {user.displayName || user.email}
              </span>
            </div>
          )}



          {/* BOTÓN LOGIN / LOGOUT */}
          {user ? (
            <button
              onClick={logout}
              className="hidden lg:block text-sm px-4 py-1.5
border border-white text-white rounded-full hover:bg-purple-300 hover:text-black transition"
            >
              Cerrar sesión
            </button>
          ) : (
            <Link
              to="/login"
              className="hidden lg:block text-sm px-4 py-1.5
                         bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
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
            className="bg-black/80 backdrop-blur-md border-t border-white/20 px-4 py-3 flex gap-2"
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar productos..."
              className="flex-1 rounded px-3 py-2 bg-white/90 text-black"
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
            className="lg:hidden bg-black/90 backdrop-blur-md border-t border-white/20"
          >
            <div className="flex flex-col p-4 gap-3">

              {user && (
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-full text-white
                  flex items-center justify-center
                  font-semibold ${getAvatarColor()}`}
                  >
                    {getInitial()}
                  </div>

                  <div className="text-sm">
                    <p className="font-medium text-gray-800">
                      {user.displayName || "Usuario"}
                    </p>
                    <p className="text-gray-500 text-xs truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
              )}



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
