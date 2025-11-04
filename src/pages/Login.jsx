import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function Login() {
  const { login, register, resetPassword, setError, error } = useAuth();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ email: "", password: "", displayName: "" });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      if (mode === "login") {
        await login({ email: form.email, password: form.password });
        navigate("/dashboard");
      } else if (mode === "register") {
        await register({ email: form.email, password: form.password, displayName: form.displayName });
        navigate("/dashboard");
      } else {
        await resetPassword(form.email);
        alert("Revisa tu correo para restablecer la contraseña.");
        setMode("login");
      }
    } catch (err) {
      const msg = err?.code?.replace("auth/", "").replaceAll("-", " ") || "error inesperado";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80dvh] flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white-800 mb-2">
          Inicia sesión en Fanverse
        </h1>
        <p className="text-white max-w-md">
          Solo los administradores de Fanverse pueden registrarse.  
          Si ya tienes acceso, inicia sesión con tus credenciales.
        </p>
      </div>

      {/* Formulario original sin tocar */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/30">
        <div className="flex gap-2 mb-6">
          <button
            className={`flex-1 py-2 rounded-lg font-medium transition ${
              mode === "login"
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md"
                : "bg-white/70 text-gray-800 border border-gray-200 hover:bg-white"
            }`}
            onClick={() => setMode("login")}
          >
            Entrar
          </button>
          <button
            className={`flex-1 py-2 rounded-lg font-medium transition ${
              mode === "register"
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md"
                : "bg-white/70 text-gray-800 border border-gray-200 hover:bg-white"
            }`}
            onClick={() => setMode("register")}
          >
            Crear cuenta
          </button>
          <button
            className={`flex-1 py-2 rounded-lg font-medium transition ${
              mode === "reset"
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md"
                : "bg-white/70 text-gray-800 border border-gray-200 hover:bg-white"
            }`}
            onClick={() => setMode("reset")}
          >
            Olvidé contraseña
          </button>
        </div>

        {error && (
          <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input
                name="displayName"
                value={form.displayName}
                onChange={onChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          {mode !== "reset" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={onChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-4 py-3 rounded-lg text-white font-medium shadow-md bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition disabled:opacity-60"
          >
            {submitting
              ? "Procesando…"
              : mode === "login"
              ? "Entrar"
              : mode === "register"
              ? "Crear cuenta"
              : "Enviar correo"}
          </button>

          <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3Jyb3NxdTVrN3U1NGk3bHl1aHdjZnprOW80dTcwM2E0cnM2dzczOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hvFQhNDTMQjXyKbnbb/giphy.gif" alt="" />
        </form>
      </div>
    </div>
  );
}
