import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function ComentariosBanner() {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "feedback"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComentarios(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="pb-14 max-w-6xl mx-auto px-4 py-5">
      {/* GRID RESPONSIVE */}
      {/* 💬 SECCIÓN DE COMENTARIOS */}
      <section className="
        py-5 px-1
        bg-gradient-to-r from-pink-400 to-indigo-400
        text-white
      ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">
            Lo que dicen nuestros fans 💬
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-12">
            Fans reales, experiencias reales. Fanverse es más que una tienda.
          </p>
        </div>
    </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {comentarios.slice(0, 12).map((c) => (
          <div
            key={c.id}
            className="
              bg-white/20 backdrop-blur-md
              rounded-2xl
              p-6
              shadow-xl
              text-white
              hover:scale-105
              transition
              relative
            "
          >
            {/* ⭐ Estrellas */}
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className={`text-xl ${
                    i <= c.rating ? "text-yellow-300" : "text-white/40"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* 💬 Comentario */}
            <p className="text-center text-base leading-relaxed mb-6 italic">
              “{c.opinion || c.comentario}”
            </p>

            {/* 👤 Usuario */}
            <p className="text-center font-semibold tracking-wide">
              {c.userName || "Fanverse 💖"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
