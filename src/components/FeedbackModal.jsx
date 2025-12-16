import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../auth/AuthProvider";

export default function FeedbackModal({ open, onClose }) {
  const [rating, setRating] = useState(0);
  const [comentario, setComentario] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // 👉 Cerrar con tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const enviarFeedback = async () => {
    if (!comentario || rating === 0) {
      alert("Por favor completa tu opinión y calificación ⭐");
      return;
    }

    try {
      setLoading(true);
      await addDoc(collection(db, "feedback"), {
        comentario,
        rating,
        userName: user?.displayName || "Fan anónimo",
        uid: user?.uid || null,
        createdAt: serverTimestamp(),
      });

      alert("💖 ¡Gracias por tu opinión!");
      setComentario("");
      setRating(0);
      onClose();
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error 😥");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // 👉 cerrar al hacer click fuera
        >
          <motion.div
            onClick={(e) => e.stopPropagation()} // ❌ evita cierre al hacer click dentro
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              relative
              bg-white
              rounded-2xl
              w-[90%]
              max-w-md
              p-6
              border
              border-black
              shadow-xl
            "
          >
            {/* ❌ BOTÓN CERRAR */}
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="
                absolute
                top-3
                right-3
                w-8
                h-8
                flex
                items-center
                justify-center
                rounded-full
                text-gray-500
                hover:text-pink-500
                hover:bg-pink-100
                transition
              "
            >
              ✕
            </button>

            {/* HEADER */}
            <h2 className="text-xl font-bold text-purple-700 mb-3">
              💬 Tu opinión importa
            </h2>

            {/* ESTRELLAS */}
            <p className="text-gray-700 mb-2">¿Qué tan satisfecha/o estás?</p>
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-3xl transition ${
                    rating >= star ? "text-pink-400" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            {/* COMENTARIO */}
            <textarea
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Cuéntanos qué te pareció Fanverse ✨"
              className="
                w-full
                h-24
                border
                border-gray-300
                rounded-lg
                p-3
                text-sm
                resize-none
                focus:outline-none
                focus:border-purple-400
                mb-4
              "
            />

            {/* BOTÓN ENVIAR */}
            <button
              onClick={enviarFeedback}
              disabled={loading}
              className="
                w-full
                bg-pink-300
                text-black
                font-semibold
                py-2.5
                rounded-full
                hover:bg-pink-400
                transition
                disabled:opacity-60
              "
            >
              {loading ? "Enviando..." : "💖 Enviar feedback"}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
