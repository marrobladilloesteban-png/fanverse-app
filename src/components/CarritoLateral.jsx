import { useCart } from "../context/CartContext";

export default function CarritoLateral() {
  const {
    carritoAbierto,
    cerrarCarrito,
    carrito,
    total,
    aumentarCantidad,
    disminuirCantidad,
    eliminarDelCarrito,
    finalizarCompra,
  } = useCart();

  if (!carritoAbierto) return null;

  return (
    <>
      {/* Fondo oscuro */}
      <div
        onClick={cerrarCarrito}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* CARRITO */}
      <div
        className="
          fixed z-50 bg-white shadow-2xl flex flex-col
          transition-all duration-300 ease-out
          
          /* 📱 CELULAR */
          bottom-0 left-0 w-full h-[75vh]
          rounded-t-3xl animate-slide-up
          
          /* 💻 DESKTOP */
          md:top-20 md:right-6 md:bottom-auto md:left-auto
          md:w-96 md:h-[85vh]
          md:rounded-2xl
        "
      >
        {/* HEADER */}
        <div className="px-5 py-4 border-b flex justify-between items-center">
          <h2 className="font-bold text-lg flex items-center gap-2">
            🛒 Mi carrito
          </h2>

          <button
            onClick={cerrarCarrito}
            className="text-purple-500 text-2xl font-bold hover:scale-110 transition"
          >
            ✕
          </button>
        </div>

        {/* PRODUCTOS */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {carrito.length === 0 ? (
            <p className="text-center text-gray-400 mt-10">
              Tu carrito está vacío 🛍️
            </p>
          ) : (
            carrito.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center border-b pb-4"
              >
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <p className="font-semibold text-sm">{item.nombre}</p>
                  <p className="text-purple-500 font-bold">
                    S/ {item.precio}
                  </p>

                  {/* CANTIDAD */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => disminuirCantidad(item.id)}
                      className="w-7 h-7 bg-gray-200 rounded-full"
                    >
                      −
                    </button>

                    <span className="text-sm">{item.cantidad}</span>

                    <button
                      onClick={() => aumentarCantidad(item.id)}
                      className="w-7 h-7 bg-gray-200 rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* ELIMINAR */}
                <button
                  onClick={() => {
                    console.log("CLICK EN BASURA", item.id);
                     eliminarDelCarrito(item.id)}}
                  className="text-gray-400 hover:text-red-500"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        <div className="px-5 py-4 border-t">
          <p className="font-bold text-lg text-black">
            Total: S/ {total.toFixed(2)}
          </p>

          <button
            onClick={finalizarCompra}
            className="
              w-full mt-3 py-3 rounded-xl
              bg-pink-300 hover:bg-purple-300
              text-black font-semibold transition
            "
          >
            Finalizar compra
          </button>

          {/* MENSAJE */}
          <p className="text-xs text-center text-gray-500 mt-3">
            💖 Compra segura · Pago protegido
          </p>
        </div>
      </div>
    </>
  );
}
