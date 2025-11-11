import React from "react";
import { useSparkleEffect } from "../useSparkleEffect";

const MvCard = ({ icon, title, children }) => (
  <section className="bg-white/70 border-2 border-black rounded-xl p-5 mb-5 shadow-[5px_5px_0_rgba(0,0,0,0.2)] backdrop-blur-md">
    <div className="flex items-center mb-2 bg-gradient-to-tr from-pink-500 to-purple-500 text-white p-2 rounded-md">
      <span className="text-2xl mr-2">{icon}</span>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    <p className="text-gray-800 text-base leading-relaxed">{children}</p>
  </section>
);

const MisionVisionPage = () => {
  useSparkleEffect();

  return (
    <div
      className="min-h-screen w-full text-gray-800 relative overflow-hidden"
      style={{
        background:
          "linear-gradient rgba(255, 111, 190, 0.9) 100%)(135deg, rgba(173, 104, 246, 0.9) 0%, ",
      }}
    >
      {/* Fondo animado con brillo tipo "inicio" */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-20"></div>

      {/* Contenedor principal */}
      <main className="relative mb-20 max-w-5xl mx-auto mt-32 px-6 py-10 bg-white/60 border-2 border-black rounded-2xl shadow-[10px_10px_0_rgba(0,0,0,0.2)] backdrop-blur-md z-1 0">
        

        {/* Misión */}
        <MvCard icon="🎤" title="Misión">
          Ser la plataforma líder de venta de álbumes de K-pop en Latinoamérica,
          conectando a los fans con sus grupos favoritos a través de una
          experiencia divertida, confiable y adaptada a cada fandom.
        </MvCard>

        {/* Visión */}
        <MvCard icon="🌟" title="Visión">
          Brindar a cada fan la facilidad de encontrar todos los álbumes de sus
          artistas favoritos, ofreciendo lanzamientos exclusivos y un espacio
          donde se celebre la pasión por el K-pop y su comunidad.
        </MvCard>

        {/* Valores */}
        <section className="bg-white/70 border-2 border-black rounded-xl p-5 mb-5 shadow-[6px_6px_0_rgba(0,0,0,0.2)] backdrop-blur-md">
          <h2 className="text-2xl font-bold text-center mb-5 bg-gradient-to-r from-pink-500 to-purple-800 text-white p-2 rounded-md">
            💖 NUESTROS VALORES 🎵
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "🎶", titulo: "Constancia", boton: "¡Perseverancia!" },
              { emoji: "🎤", titulo: "Integridad", boton: "¡Autenticidad!" },
              { emoji: "🎧", titulo: "Tolerancia", boton: "¡Respeto!" },
              { emoji: "🌈", titulo: "Pasión", boton: "¡Energía K-pop!" },
            ].map((v, i) => (
              <div
                key={i}
                className="text-center bg-pink-50/80 p-4 rounded-lg border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
              >
                <span className="text-2xl block mb-2">{v.emoji}</span>
                <h3 className="font-bold text-lg mb-1">{v.titulo}</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Representa nuestro compromiso diario.
                </p>
                <button className="bg-pink-400 text-white px-3 py-1 text-sm rounded-md shadow-[2px_2px_0_rgba(0,0,0,0.2)] transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
                  {v.boton}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white/70 border-2 border-black rounded-xl p-5 text-center shadow-[6px_6px_0_rgba(0,0,0,0.2)] backdrop-blur-md">
          <h2 className="text-2xl font-bold text-center mb-5 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded-md">
            ¡Únete a la fiesta K-pop! 💜
          </h2>

          <img
            src="https://media1.tenor.com/m/1pluedrae0cAAAAd/kpdh-kpop.gif"
            alt="Grupo Kpop bailando"
            className="mx-auto w-full md:w-2/5 rounded-lg shadow-lg mb-6"
          />

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="/" className="w-full md:w-auto">
              <button className="bg-pink-500 text-white px-5 py-2 text-lg rounded-md shadow-[3px_3px_0_rgba(0,0,0,0.3)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_rgba(0,0,0,0.3)] transition">
                🎶 ¡Comienza la música!
              </button>
            </a>
            <a href="/formulario" className="w-full md:w-auto">
              <button className="bg-pink-400 text-white px-5 py-2 text-lg rounded-md shadow-[3px_3px_0_rgba(0,0,0,0.3)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_rgba(0,0,0,0.3)] transition">
                💬 ¡Deja tu feedback!
              </button>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MisionVisionPage;



