import { createContext, useContext, useState, useEffect } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../auth/AuthProvider";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useAuth();

  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [total, setTotal] = useState(0);

  /* ------------------ CONTROL VISUAL ------------------ */
  const abrirCarrito = () => setCarritoAbierto(true);
  const cerrarCarrito = () => setCarritoAbierto(false);

  /* ------------------ CALCULAR TOTAL ------------------ */
  useEffect(() => {
    const nuevoTotal = carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
    setTotal(nuevoTotal);
  }, [carrito]);

  /* ------------------ AGREGAR AL CARRITO ------------------ */
  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);

      if (existe) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...prev, { ...producto, cantidad: 1 }];
    });

    abrirCarrito();
  };

  /* ------------------ NUEVO: + / - CANTIDAD ------------------ */
  const aumentarCantidad = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0) // elimina si llega a 0
    );
  };

  /* ------------------ ELIMINAR PRODUCTO ------------------ */
  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  /* ------------------ FINALIZAR COMPRA ------------------ */
  const finalizarCompra = async () => {
    if (!user) {
      alert("Debes iniciar sesión para finalizar la compra");
      return;
    }

    if (carrito.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    try {
      const compraId = `${user.uid}_${Date.now()}`;

      await setDoc(doc(db, "compras", compraId), {
        uid: user.uid,
        items: carrito,
        total: total,
        fecha: serverTimestamp(),
      });

      vaciarCarrito();
      cerrarCarrito();

      alert("🎉 Compra realizada con éxito");
    } catch (error) {
      console.error("🔥 ERROR REAL:", error);
      alert("Ocurrió un error al finalizar la compra");
    }
  };

  /* ------------------ GUARDAR CARRITO EN FIREBASE ------------------ */
  useEffect(() => {
    if (!user) return;

    const guardarCarrito = async () => {
      await setDoc(doc(db, "carritos", user.uid), {
        items: carrito,
        total,
        updatedAt: serverTimestamp(),
      });
    };

    guardarCarrito();
  }, [carrito, total, user]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        total,
        carritoAbierto,
        abrirCarrito,
        cerrarCarrito,
        agregarAlCarrito,
        aumentarCantidad,     // ✅ NUEVO
        disminuirCantidad,    // ✅ NUEVO
        eliminarDelCarrito,
        vaciarCarrito,
        finalizarCompra,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
