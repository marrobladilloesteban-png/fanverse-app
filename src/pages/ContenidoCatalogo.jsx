import album1 from "../assets/album_bts1.png"
import album2 from "../assets/abum-bts2.png"
import album3 from "../assets/abum-bts3.png"
import album4 from "../assets/album-bts4.png"


function ContenidoCatalogo({ selectedOption }) {
  if (!selectedOption) {
    return (
      <p className="text-center text-lg italic">
        Selecciona una categoría para ver sus productos ✨
      </p>
    );
  }

  // ✅ Función para mostrar alerta
  const agregarAlCarrito = (nombre) => {
    alert(`✅ ${nombre} agregado al carrito 🛒`);
  };
  

  // 📦 Productos de cada categoría (A = álbumes, B = accesorios, C = ropa)
  const tarjetas = {
    // Producto A → Álbumes
    albumes: [
      {
        nombre: "SKOOL LUV AFFAIR",
        precio: "$25.99",
        imagen: album1,
      },
      {
        nombre: "BOY IN LUV",
        precio: "$27.50",
        imagen: album2,
      },
      {
        nombre: "MAP OF THE SOUL",
        precio: "$31.00",
        imagen: album3,
      },
      {
        nombre: "DYNAMITE",
        precio: "$22.99",
        imagen: album4,
      },
      {
        nombre: "BUTTER",
        precio: "$28.00",
        imagen: "https://i.pinimg.com/564x/30/d0/ef/30d0ef59aef3a57f52a676b406a982ef.jpg",
      },
    ],

    // Producto B → Accesorios
    albumB: [
      {
        nombre: "Pulsera BTS",
        precio: "$9.99",
        imagen:
          "https://i.pinimg.com/564x/30/d0/ef/30d0ef59aef3a57f52a676b406a982ef.jpg",
      },
      {
        nombre: "Anillo BLACKPINK",
        precio: "$7.50",
        imagen:
          "https://i.pinimg.com/564x/0b/3d/72/0b3d72c384ffb6eb4c68a0321e0838a5.jpg",
      },
      {
        nombre: "Collar TWICE",
        precio: "$8.99",
        imagen:
          "https://i.pinimg.com/564x/64/48/7e/64487ed2264c49341de8c93e88c3142a.jpg",
      },
      {
        nombre: "Aretes ITZY",
        precio: "$5.50",
        imagen:
          "https://i.pinimg.com/564x/1a/ff/09/1aff097f836b4d5f0c1b4cf91e05b3e0.jpg",
      },
      {
        nombre: "Gafas STRAY KIDS",
        precio: "$12.00",
        imagen:
          "https://i.pinimg.com/564x/17/6a/15/176a15d84f9fd39c94c0dfeb8f61b2b9.jpg",
      },
    ],

    // Producto C → Ropa
    albumT: [
      {
        nombre: "Camiseta BTS Logo",
        precio: "$19.99",
        imagen:
          "https://i.pinimg.com/564x/64/17/6b/64176b39bdb73cb56f6a9e6d9af54a9b.jpg",
      },
      {
        nombre: "Hoodie BLACKPINK",
        precio: "$29.99",
        imagen:
          "https://i.pinimg.com/564x/0e/fb/16/0efb167ea19a22cc171b9d84b7f623b9.jpg",
      },
      {
        nombre: "Vestido TWICE",
        precio: "$25.00",
        imagen:
          "https://i.pinimg.com/564x/cc/ea/41/ccea41d1e4d0b3a1b9c9f83a6e3c6042.jpg",
      },
      {
        nombre: "Pantalón ITZY",
        precio: "$23.50",
        imagen:
          "https://i.pinimg.com/564x/57/43/7b/57437b6b6b8c1b4b37ddbe3f2e41c3cf.jpg",
      },
      {
        nombre: "Falda STRAY KIDS",
        precio: "$21.00",
        imagen:
          "https://i.pinimg.com/564x/20/bd/1c/20bd1cf7c8c4f977c799dc34cf7fbc67.jpg",
      },
    ],
  };

  const lista = tarjetas[selectedOption] || [];

  return (
    <div className="bg-[rgba(245, 235, 242, 0.3)] p-5 rounded-xl shadow-md text-center max-w-[1000px] mx-auto border-2 border-black mt-[20px] mb-[50px]
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {lista.map((item) => (
        <div
          key={item.nombre}
          className="bg-white rounded-lg p-4 text-center shadow-lg transition-transform duration-200 ease-in-out hover:scale-105">
          <img
            src={item.imagen}
            alt={item.nombre}
            className="w-70 h-70 object-cover rounded-lg mb-3"
          />
          <h3 className="text-black font-semibold text-xl">{item.nombre}</h3>
          <p className="text-purple-600 font-bold">{item.precio}</p>

          {/* 🛒 Botón con alerta */}
          <button
            onClick={() => agregarAlCarrito(item.nombre)}
            className="mt-3 bg-gradient-to-r from-pink-400 to-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition"
          >
            🛒 Comprar
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContenidoCatalogo;

