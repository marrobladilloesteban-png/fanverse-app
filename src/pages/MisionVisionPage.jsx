import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../auth/AuthProvider";
import { useSparkleEffect } from "../useSparkleEffect";
import FeedbackModal from "../components/FeedbackModal";

const MvCard = ({ icon, title, children }) => (
  <section className="
    bg-white/80
    border border-black
    rounded-2xl
    p-6
    mb-6
    shadow-sm
    backdrop-blur-md
  ">
    <div className="flex items-center gap-3 mb-3">
      <span className="text-3xl">{icon}</span>
      <h2 className="text-2xl font-bold text-purple-700">
        {title}
      </h2>
    </div>

    <p className="text-gray-700 text-base leading-relaxed">
      {children}
    </p>
  </section>
);



const MisionVisionPage = () => {
  useSparkleEffect(); // 👈 custom hook

  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [openFeedback, setOpenFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const [opinion, setOpinion] = useState("");
  const [enviado, setEnviado] = useState(false);

  const enviarFeedback = async () => {
    if (!user) {
      alert("Debes iniciar sesión para enviar feedback 💖");
      return;
    }

    if (rating === 0 || opinion.trim() === "") {
      alert("Por favor, califica la página y escribe tu opinión 💖");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "feedback"), {
        rating,
        opinion,
        uid: user.uid,
        userName: user.displayName || user.email,
        createdAt: serverTimestamp(),
      });

      setEnviado(true);
      setRating(0);
      setOpinion("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };



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
      <main
        className="
    relative
    mb-20
    max-w-5xl
    mx-auto
    mt-32
    px-6
    py-12
    bg-white/70
    border border-black
    rounded-3xl
    shadow-md
    backdrop-blur-md
  "
      >



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
          <h2 className="text-2xl text-center mb-6 text-purple-700">
            <p><b>💖 NUESTROS VALORES 🎵</b></p>
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
                className="text-center bg-yellow-100 p-4 rounded-xl border border-black shadow-sm transition hover:scale-105"
              >
                <span className="text-2xl block mb-2">{v.emoji}</span>
                <h3 className="font-semibold text-lg text-black mb-1">{v.titulo}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Representa nuestro compromiso diario.
                </p>
                <button className="bg-lilac-200 bg-purple-200 text-black px-4 py-1.5 text-sm rounded-full border border-black hover:bg-pink-200 transition">
                  {v.boton}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white/70 border-2 border-black rounded-xl p-5 text-center shadow-[6px_6px_0_rgba(0,0,0,0.2)] backdrop-blur-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">
            ¡Únete a la fiesta K-pop! 💜
          </h2>

          <img
            src="https://media1.tenor.com/m/1pluedrae0cAAAAd/kpdh-kpop.gif"
            alt="Grupo Kpop bailando"
            className="mx-auto w-full md:w-2/5 rounded-lg shadow-lg mb-6"
          />

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            
            <button
              onClick={() => setOpenFeedback(true)}
              className="bg-purple-200 text-black px-6 py-2.5 text-lg rounded-full border border-black hover:bg-purple-300 transition w-full md:w-auto"
            >
              💬 ¡Deja tu feedback!
            </button>
            


          </div>
        </section>
      </main>
      <FeedbackModal
  open={openFeedback}
  onClose={() => {
    setOpenFeedback(false);
    setEnviado(false);
    setRating(0);
    setOpinion("");
  }}
/>


    </div>
  );
};



export default MisionVisionPage;



