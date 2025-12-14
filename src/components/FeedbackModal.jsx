import { useState } from "react";

export default function FeedbackModal({ open, onClose }) {
  const [rating, setRating] = useState(0);
  const [comentario, setComentario] = useState("");

  if (!open) return null;

  const enviarFeedback = () => {
    if (!comentario || rating === 0) {
      alert("Por favor completa tu opinión y calificación ⭐");
      return;
    }

    console.log({
      rating,
      comentario,
    });

    alert("💖 ¡Gracias por tu feedback!");
    setRating(0);
    setComentario("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-[90%] max-w-md p-6 border border-black shadow-lg animate-fadeIn">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-purple-700">
            💬 Tu opinión importa
          </h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold text-black hover:text-pink-500"
          >
            ✕
          </button>
        </div>

        {/* Estrellas */}
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

        {/* Comentario */}
        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          placeholder="Cuéntanos qué te pareció la página ✨"
          className="
            w-full
            h-24
            border
            border-black
            rounded-lg
            p-3
            text-sm
            resize-none
            focus:outline-none
            focus:border-purple-400
            mb-4
          "
        />

        {/* Botón enviar */}
        <button
          onClick={enviarFeedback}
          className="
            w-full
            bg-pink-300
            text-black
            font-semibold
            py-2.5
            rounded-full
            border
            border-black
            hover:bg-pink-400
            transition
          "
        >
          💖 Enviar feedback
        </button>
      </div>
    </div>
  );
}
