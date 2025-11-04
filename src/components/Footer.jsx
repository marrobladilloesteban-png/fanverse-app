// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-12 border-b border-gray-200">
        
        {/* 💖 Sección 1: Marca */}
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Fanverse
          </h2>
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            Tu espacio para vivir la pasión por el K-pop 🎶  
            ¡Explora, vibra y colecciona con nosotros!
          </p>
        </div>

        {/* 💜 Sección 2: Navegación */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Navegación</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/" className="hover:text-pink-500 hover:font-semibold transition">Inicio</Link></li>
            <li><Link to="/catalogo" className="hover:text-pink-500 hover:font-semibold transition">Catálogo</Link></li>
            <li><Link to="/quienes" className="hover:text-pink-500 hover:font-semibold transition">Quiénes Somos</Link></li>
            <li><Link to="/contacto" className="hover:text-pink-500 hover:font-semibold transition">Contáctanos</Link></li>
          </ul>
        </div>

        {/* 💗 Sección 3: Contacto y redes */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Contáctanos</h3>
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 text-gray-600">
            <FaPhoneAlt className="text-pink-500" /> <span>+51 987 654 321</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-5 text-gray-600">
            <FaEnvelope className="text-pink-500" /> <span>contacto@fanverse.com</span>
          </div>

          <div className="flex justify-center sm:justify-start gap-5 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} <span className="font-semibold text-pink-500">Fanverse</span>. Todos los derechos reservados.
      </div>
    </footer>
  );
}
