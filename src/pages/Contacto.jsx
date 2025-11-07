import { useState } from "react";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [imagen, setImagen] = useState(null);

  const validarFormulario = (e) => {
    e.preventDefault();

    // Validación básica
    if (!nombre || !email || !mensaje) {
      alert("❌ Por favor completa todos los campos obligatorios.");
      return;
    }

    // Validación de email con expresión regular
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
      alert("⚠️ Ingresa un correo electrónico válido.");
      return;
    }

    // Si todo está correcto
    alert("✅ ¡Formulario enviado correctamente!");

    // Reiniciar los campos
    setNombre("");
    setEmail("");
    setMensaje("");
    setImagen(null);
    e.target.reset();
  };

  return (
    <main className="p-6 flex flex-col items-center bg-gradient-to-r from-pink-400 to-indigo-400 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6">📩 Contáctanos</h1>

      <form
        onSubmit={validarFormulario}
        className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center space-y-4"
      >
        {/* Nombre */}
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Email */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu correo electrónico"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Mensaje */}
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe tu mensaje aquí..."
          rows="4"
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
        />

        {/* Imagen (opcional) */}
        <div className="w-full">
          <label className="block text-gray-700 mb-1 font-medium">
            Subir imagen (opcional):
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImagen(e.target.files[0])}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg bg-gray-50"
          />
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}

