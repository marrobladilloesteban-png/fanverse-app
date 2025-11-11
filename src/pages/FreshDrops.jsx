// src/pages/FreshDrops.jsx
import { useEffect, useState } from "react";
import { listenPublicCourses } from "../services/courseService";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = listenPublicCourses(
      (data) => {
        setCursos(data);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-[80vh] -to-b from-slate-50 to-slate-100">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
       <div className="max-w-6xl mb-8 text-center mx-auto">
  <h1 className="text-3xl sm:text-4xl font-bold text-white-900 mb-3">
    LO NUEVO EN FANVERSE
  </h1>
  <p className="text-sm sm:text-base text-white-700 leading-relaxed">
    ¡Recién salidos del estudio, directo a tu vitrina! Sumérgete en los lanzamientos más vibrantes del universo K-pop: álbums que acaban de ver la luz, ediciones especiales que marcan nuevas eras y colecciones que harán brillar tu fandom. Esta sección se actualiza en tiempo real desde nuestro backstage, para que siempre estés al día con lo más fresh, lo más icónico y lo más esperado. ¡Prepárate para agregar nuevas joyas a tu colección y vivir cada comeback como si estuvieras en primera fila!
  </p>
</div>



        {/* Contenido */}
        {loading ? (
          <p className="text-slate-500 text-sm">Cargando álbumes…</p>
        ) : cursos.length === 0 ? (
          <p className="text-slate-500 text-sm">
            Aún no hay álbumes publicados. Inicia sesión para crear el primero
            desde el dashboard.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cursos.map((curso) => (
              <article
                key={curso.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <h2 className="text-base font-semibold text-slate-900 mb-1">
                    {curso.nombre}
                  </h2>
                  <p className="text-xs text-slate-500 mb-3 line-clamp-3">
                    {curso.descripcion}
                  </p>
                  {curso.fecha && (
  <p className="text-[11px] text-slate-500 mb-2">
    📅 Fecha disponible:{" "}
    {curso.fecha.toDate
      ? curso.fecha.toDate().toLocaleDateString("es-PE") // convierte el Timestamp a Date
      : new Date(curso.fecha).toLocaleDateString("es-PE")}
  </p>
)}



                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-600">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                      Grupo: {curso.grupo || "No especificado"}
                    </span>
                    {typeof curso.precio === "number" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                        Precio: ${curso.precio.toLocaleString("es-MX")}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 text-[11px] text-slate-400">
                  Actualizado en tiempo real desde el panel de administración.
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}