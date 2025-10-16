// src/pages/Albumes.jsx
export default function Albumes() {
  const albums = [
    {
      id: 1,
      nombre: "Álbum Sakura",
      descripcion: "Un hermoso álbum con temática floral y delicados detalles japoneses.",
      imagen: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      nombre: "Álbum Memories",
      descripcion: "Perfecto para guardar tus recuerdos más felices y memorables.",
      imagen: "https://images.unsplash.com/photo-1549887534-3db1bd59dcca?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      nombre: "Álbum Golden",
      descripcion: "Un diseño elegante con tonos dorados para tus momentos más especiales.",
      imagen: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      nombre: "Álbum Adventure",
      descripcion: "Ideal para tus fotos de viajes, aventuras y paisajes impresionantes.",
      imagen: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      nombre: "Álbum Sweet Memories",
      descripcion: "Un toque pastel para tus momentos más tiernos y dulces.",
      imagen: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 to-indigo-400 p-6">
      <h1 className="text-4xl font-bold text-center text-white mb-8">🎶 Álbumes</h1>

      {/* Contenedor responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <img
              src={album.imagen}
              alt={album.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-white">
              <h2 className="text-lg font-semibold">{album.nombre}</h2>
              <p className="text-sm text-white/90 mt-2">{album.descripcion}</p>
              <button className="mt-4 bg-white text-indigo-700 font-semibold px-4 py-2 rounded-lg hover:bg-pink-200 transition">
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
