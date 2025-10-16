import yadiPng from '../assets/yadira-png.png'
import mariPng from '../assets/marisa-png.png'
import briPng from '../assets/britney-png.png'

export default function QuienesSomos() {
  const integrantes = [
    {
      nombre: "Yadira Estañis",
      rol: "Project Manager",
      descripcion:
        "Organiza tareas, coordina al equipo, y realiza pruebas para asegurar calidad y funcionalidad.",
      bgColor: "from-indigo-400 to-pink-400",
      img: yadiPng,
    },
    {
      nombre: "Marisa Robladillo",
      rol: "Frontend Developer",
      descripcion:
        "Diseña y codifica la interfaz visual (HTML y CSS). Se asegura de que sea atractiva y funcional.",
      bgColor: "from-pink-400 to-indigo-400",
      img: mariPng
    },
    {
      nombre: "Britney Porteros",
      rol: "Backend Developer",
      descripcion:
        "Maneja la lógica del servidor, bases de datos y seguridad.",
      bgColor: "from-indigo-400 to-pink-400",
      img: briPng
    },
  ];

  return (
    <main className="pt-24 p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 drop-shadow-lg text-white/90">
        Conoce al equipo detrás de Fanverse
      </h1>
      <p className="mb-5 text-white">
        Somos un grupo de fanáticas de la música, coleccionistas apasionadas y programadoras especialistas en desarrollo web, unidas por el deseo de compartir lo que amamos.
        En Fanverse, reunimos álbumes únicos, ediciones especiales y novedades de tus artistas favoritos, creando una plataforma diseñada con dedicación y tecnología para que encuentres esa pieza que hace vibrar tu colección.
      </p>

      {/* === Nuestro equipo === */}
      <h2 className="text-2xl font-bold text-purple-900 drop-shadow-lg mb-6 text-center">
        Nuestro equipo
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mb-12">
        {integrantes.map((i) => (
          <div
            key={i.nombre}
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
          >
            <div
              className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-r ${i.bgColor} flex items-center justify-center`}
            >
              <img src={i.img} alt={i.nombre} className="rounded-full w-28 h-28 object-cover" />
            </div>

            <h3 className="mt-4 text-lg font-bold text-purple-700">{i.nombre}</h3>
            <span className="inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500">
              {i.rol}
            </span>
            <p className="mt-3 text-gray-600 text-sm">{i.descripcion}</p>
          </div>
        ))}
      </div>

      {/* === Nuestra historia === */}
      <h2 className="text-2xl font-bold text-white/90 drop-shadow-lg mb-4">
        Nuestra historia
      </h2>

      <p className="mb-5 text-white leading-relaxed">
        Fanverse nació en 2024 de una simple idea: los verdaderos fans merecen un lugar
        donde puedan encontrar los álbumes que aman y vivir la experiencia de coleccionarlos como nunca antes.
        Como amantes de la música y la cultura pop, sabemos lo difícil que puede ser conseguir ediciones especiales,
        encontrar lanzamientos exclusivos o mantener en buen estado esas joyas que significan tanto para nosotros.
        Decidimos que era momento de crear algo diferente: una tienda que no solo venda álbumes, sino que celebre
        la pasión de coleccionarlos, ofreciendo productos auténticos, ediciones limitadas y una experiencia de compra
        pensada para fans como nosotros. Hoy, Fanverse es el resultado de meses de investigación, búsqueda de proveedores
        confiables y diseño de un espacio online que conecta a coleccionistas con las piezas que tanto anhelan.
        Seguimos siendo fans, y esa pasión es lo que nos impulsa a mantenernos cerca de nuestra comunidad y ofrecer siempre lo mejor.
      </p>

      {/* === Lo que nos mueve === */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-purple-900 mb-8 drop-shadow-md">
          Lo que nos mueve
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          {/* 1️⃣ Pasión por los fans */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-purple-100 hover:shadow-lg transition">
            <div className="text-5xl mb-3 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              🎯
            </div>
            <h3 className="font-bold text-lg text-purple-800 mb-2">
              Pasión por los fans
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Cada decisión que tomamos está pensada para ofrecer la mejor experiencia a nuestra comunidad de coleccionistas.
            </p>
          </div>

          {/* 2️⃣ Novedades exclusivas */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-purple-100 hover:shadow-lg transition">
            <div className="text-5xl mb-3 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              🚀
            </div>
            <h3 className="font-bold text-lg text-purple-800 mb-2">
              Novedades exclusivas
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Buscamos constantemente lanzamientos y ediciones limitada que no encontrarás en cualquier tienda.
            </p>
          </div>

          {/* 3️⃣ Conexión con la comunidad */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-purple-100 hover:shadow-lg transition">
            <div className="text-5xl mb-3 bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
              🤝
            </div>
            <h3 className="font-bold text-lg text-purple-800 mb-2">
              Conexión con la comunidad
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Creemos en compartir, intercambiar y vivir juntos la emoción de coleccionar.
            </p>
          </div>

          {/* 4️⃣ Cultura musical viva */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-purple-100 hover:shadow-lg transition">
            <div className="text-5xl mb-3 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              💖
            </div>
            <h3 className="font-bold text-lg text-purple-800 mb-2">
              Cultura musical viva
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Más que vender álbumes, celebramos la música y la historia que cada disco guarda en su interior.
            </p>
          </div>
        </div>

        {/* Botón final */}
        <div className="mt-10">
          <button className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition shadow-md">
            Conoce nuestra misión completa
          </button>
        </div>
      </section>

    </main>
  );
}
