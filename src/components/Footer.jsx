// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-400 to-indigo-500 text-white mt-16 py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        
        {/* 🩷 Sección 1: Logo o nombre */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Fanverse</h2>
          <p className="text-sm text-white/80">
            Tu espacio para vivir la pasión por el K-pop 🎶  
            ¡Explora, vibra y colecciona con nosotros!
          </p>
        </div>

        {/* 💜 Sección 2: Navegación */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Navegación</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Inicio</Link></li>
            <li><Link to="/catalogo" className="hover:underline">Catálogo</Link></li>
            <li><Link to="/quienes" className="hover:underline">Quiénes Somos</Link></li>
            <li><Link to="/contacto" className="hover:underline">Contáctanos</Link></li>
          </ul>
        </div>

        {/* 💖 Sección 3: Contacto y redes */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contáctanos</h3>
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
            <FaPhoneAlt /> <span>+51 987 654 321</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
            <FaEnvelope /> <span>contacto@fanverse.com</span>
          </div>

          <div className="flex justify-center sm:justify-start gap-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-white/70 mt-8 border-t border-white/30 pt-4">
        © {new Date().getFullYear()} Fanverse. Todos los derechos reservados.
      </div>
    </footer>
  );
}
