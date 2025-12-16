import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ComentariosBanner from "../components/ComentariosBanner";
import SeccionAlbumes from "../components/SeccionAlbumes";
const Banner = () => {
  return (
    <>
      {/* 🔥 HERO / BANNER */}
      <section className="pt-20 relative min-h-screen bg-black text-white overflow-hidden">
        {/* Imagen de fondo */}
        <img
          src="https://billboard-com-br.s3.amazonaws.com/wp-content/uploads/2025/06/30174931/site_kpop.jpg"
          alt="Fanverse Kpop"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Overlay lila pastel */}
        <div className="absolute inset-0 bg-purple-300/20"></div>

        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-10 items-center">
          {/* TEXTO */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Vive el <span className="text-purple-300">K-Pop</span><br />
              como nunca antes
            </h1>

            <p className="text-gray-200 text-lg mb-8 max-w-xl">
              Descubre álbumes originales, merch exclusiva y los últimos
              lanzamientos de tus grupos favoritos en un solo lugar.
            </p>

            {/* BOTONES */}
            <div className="flex flex-wrap gap-4">
              <Link to="/catalogo">
                <button className="bg-purple-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-purple-400 transition">
                  Explorar catálogo
                </button>
              </Link>

              <Link to="/fresh-drops">
                <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
                  Fresh Drops
                </button>
              </Link>
            </div>
          </div>

          {/* TEXTO LATERAL */}
          <div className="hidden md:block text-right space-y-4">
            <h1 className="
              text-5xl lg:text-6xl
              font-light tracking-[0.45em]
              uppercase text-white
              drop-shadow-[0_4px_18px_rgba(200,160,255,0.45)]
            ">
              FANVERSE
            </h1>

            <p className="text-xs uppercase tracking-[0.35em] text-purple-200">
              K-Pop Store
            </p>

            <p className="text-white/70 max-w-xs ml-auto leading-relaxed">
              Donde los fandoms se conectan con la música,
              la pasión y la autenticidad.
            </p>
          </div>
        </div>
      </section>
      <SeccionAlbumes/>

      {/* 💬 SECCIÓN DE COMENTARIOS */}
      <section className="
        py-3 px-6
        bg-gradient-to-r from-pink-400 to-indigo-400
        text-white
      ">
        
      </section>
      {/* 💬 COMENTARIOS REALES */}

<ComentariosBanner />

    </>
  );
};

export default Banner;

