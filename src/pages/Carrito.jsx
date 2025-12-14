import { useCart } from "../context/CartContext.jsx";

export default function Carrito() {
  const { carrito, total, eliminarDelCarrito, vaciarCarrito } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">🛒 Tu carrito</h2>

      {carrito.length === 0 && <p>Carrito vacío</p>}

      {carrito.map((item) => (
        <div key={item.id} className="bg-white text-black p-4 rounded mb-3">
          <h3>{item.nombre}</h3>
          <p>Precio: S/. {item.precio}</p>
          <p>Cantidad: {item.cantidad}</p>
          <p className="font-semibold">
            Subtotal: S/. {item.precio * item.cantidad}
          </p>

          <button
            className="bg-red-500 text-white px-3 py-1 mt-2"
            onClick={() => eliminarDelCarrito(item.id)}
          >
            Eliminar
          </button>
        </div>
      ))}

      {carrito.length > 0 && (
        <>
          <h3 className="text-xl mt-4 font-bold">
            Total: S/. {total.toFixed(2)}
          </h3>

          <button
            className="bg-indigo-600 text-white px-5 py-2 mt-4"
            onClick={vaciarCarrito}
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}