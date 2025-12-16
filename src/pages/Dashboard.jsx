import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { useCourses } from "../hooks/useCourses";
import {
  createCourse,
  updateCourse,
  deleteCourseById,
} from "../services/courseService";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default function Dashboard() {
  const { user } = useAuth();

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [grupo, setGrupo] = useState("BTS");
  const [fecha, setFecha] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [filtroGrupo, setFiltroGrupo] = useState("Todos");

  // 🔹 Obtener cursos del usuario
  const { cursos, loadingCursos } = useCourses(user?.uid);

  // 🔹 Limpiar formulario
  const resetForm = () => {
    setNombre("");
    setDescripcion("");
    setPrecio("");
    setGrupo("BTS");
    setFecha("");
    setEditingId(null);
  };

  // 🔹 Guardar o actualizar álbum
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre.trim() || !descripcion.trim() || !precio || !fecha) {
      alert("Todos los campos son obligatorios, incluida la fecha.");
      return;
    }

    try {
      const precioNumber = Number(precio);
      if (isNaN(precioNumber)) {
        alert("El precio debe ser numérico.");
        return;
      }

      if (editingId) {
        // Actualizar
        await updateCourse(editingId, {
          nombre,
          descripcion,
          precio: precioNumber,
          grupo,
          fecha,
        });
      } else {
        // Crear nuevo
        await createCourse(user.uid, {
          nombre,
          descripcion,
          precio: precioNumber,
          grupo,
          fecha,
        });
      }

      resetForm();
    } catch (error) {
      console.error("Error al guardar curso:", error);
      alert("Ocurrió un error al guardar el curso.");
    }
  };

  // 🔹 Cargar datos al editar
  const handleEdit = (curso) => {
    setNombre(curso.nombre);
    setDescripcion(curso.descripcion);
    setPrecio(curso.precio);
    setGrupo(curso.grupo || "BTS");
    setFecha(
      curso.fecha
        ? new Date(curso.fecha.toDate ? curso.fecha.toDate() : curso.fecha)
            .toISOString()
            .split("T")[0]
        : ""
    );
    setEditingId(curso.id);
  };

  // 🔹 Eliminar curso
  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este álbum?")) return;

    try {
      await deleteDoc(doc(db, "cursos", id));
    } catch (error) {
      console.error("Error al eliminar curso:", error);
      alert("Ocurrió un error al eliminar el álbum.");
    }
  };

  // 🔹 Filtrar por grupo
  const cursosFiltrados =
    filtroGrupo === "Todos"
      ? cursos
      : cursos.filter((c) => c.grupo === filtroGrupo);

  return (
    <div className="min-h-[80vh] -to-b from-slate-50 via-slate-50 to-slate-100">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-slate-900 drop-shadow-lg text-white/90">
            Administración de álbumes de K-Pop
          </h1>
          <p className="text-sm text-slate-600">
            Sesión iniciada como{" "}
            <span className="font-medium">
              {user.displayName || user.email}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-1">
              {editingId ? "Editar álbum" : "Nuevo álbum"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Nombre del Álbum
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full px-3 py-2 border border-black rounded-md text-sm text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Ej. Map of the Soul: Persona - BTS"
                />
              </div>

              {/* Descripción */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Descripción
                </label>
                <textarea
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  className="w-full px-3 py-2 border border-black rounded-md text-sm text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={3}
                  placeholder="Describe brevemente el álbum"
                />
              </div>

              {/* Precio y Grupo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Precio (PEN)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    className="w-full px-3 py-2 border border-black rounded-md text-sm text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Ej. 19.90"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Grupo
                  </label>
                  <select
                    value={grupo}
                    onChange={(e) => setGrupo(e.target.value)}
                    className="w-full px-3 py-2 border border-black rounded-md text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="BTS">BTS</option>
                    <option value="BlackPink">BlackPink</option>
                    <option value="Twice">Twice</option>
                  </select>
                </div>
              </div>

              {/* Fecha */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Fecha de lanzamiento
                </label>
                <input
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  className="w-full px-3 py-2 border border-black rounded-md text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Botones */}
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  {editingId ? "Actualizar álbum" : "Guardar álbum"}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 rounded-md text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
                  >
                    Cancelar edición
                  </button>
                )}
              </div>
            </form>
          </section>

          {/* Listado */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Mis álbumes
                </h2>
                <p className="text-sm text-slate-500">
                  CRUD completo filtrado por tu usuario.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Filtrar por grupo
                </label>
                <select
                  value={filtroGrupo}
                  onChange={(e) => setFiltroGrupo(e.target.value)}
                  className="px-3 py-1 border border-black rounded-md text-xs text-black focus:outline-none focus:ring-2 focus:ring-indigo-800"
                >
                  <option value="Todos">Todos</option>
                  <option value="BTS">BTS</option>
                  <option value="BlackPink">BlackPink</option>
                  <option value="Twice">Twice</option>
                </select>
              </div>
            </div>

            {/* Listado */}
            {loadingCursos ? (
              <p className="border border-black text-slate-500 text-sm">Cargando álbumes…</p>
            ) : cursosFiltrados.length === 0 ? (
              <p className="text-slate-500 text-sm">
                Aún no tienes álbumes registrados.
              </p>
            ) : (
              <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
                {cursosFiltrados.map((curso) => (
                  <article
                    key={curso.id}
                    className="border border-slate-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:border-indigo-100 hover:shadow-sm transition"
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {curso.nombre}
                      </h3>
                      <p className="text-xs text-slate-500 mb-1">
                        {curso.descripcion}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                          Grupo: {curso.grupo}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                          Precio: S/. {curso.precio}
                        </span>
                        {curso.fecha && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-50 text-slate-700">
                            Fecha:{" "}
                            {new Date(
                              curso.fecha.seconds
                                ? curso.fecha.toDate()
                                : curso.fecha
                            ).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:flex-none">
                      <button
                        onClick={() => handleEdit(curso)}
                        className="px-3 py-1 text-xs font-medium rounded-md bg-amber-400 text-slate-900 hover:bg-amber-500 transition"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(curso.id)}
                        className="px-3 py-1 text-xs font-medium rounded-md bg-rose-500 text-white hover:bg-rose-600 transition"
                      >
                        Eliminar
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

