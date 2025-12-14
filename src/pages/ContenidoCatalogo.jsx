import album1 from "../assets/album_bts1.png";
import album2 from "../assets/abum-bts2.png";
import album3 from "../assets/abum-bts3.png";
import album4 from "../assets/album-bts4.png";
import album5 from "../assets/album-bp.png";
import album6 from "../assets/album-bp2.png";
import album7 from "../assets/album-bp3.png";
import album8 from "../assets/album-bp4.png";
import album9 from "../assets/album-bts5.png";
import albumt1 from "../assets/album-twice1.jpg";
import albumt2 from "../assets/album-twice2.jpg";
import albumt3 from "../assets/album-twice3.jpg";
import albumt4 from "../assets/album-twice4.jpg";
import acceso1 from "../assets/almohada bts 1.png";
import acceso2 from "../assets/almohada bts 2.png";
import acceso3 from "../assets/cuaderno bts 1.png";
import acceso4 from "../assets/cuaderno bts 2.png";
import acceso5 from "../assets/taza bts 1.jpg";
import acceso6 from "../assets/taza bts 2.jpg";
import accesobp1 from "../assets/almohada bp 1.png";
import accesobp2 from "../assets/almohada bp 2.png";
import accesobp3 from "../assets/cuaderno bp 1.png";
import accesobp4 from "../assets/cuaderno bp 2.png";
import accesobp5 from "../assets/taza bp 1.png";
import accesobp6 from "../assets/taza bp 2.png";
import accesotw1 from "../assets/almohada twice 1.png";
import accesotw2 from "../assets/almohada twice 2.png";
import acesotw3 from "../assets/cuaderno twice 1.png";
import accesotw4 from "../assets/cuaderno twice 2.png";
import accesotw5 from "../assets/taza twice 1.png";
import accesotw6 from "../assets/taza twice 2.png";
import ropabts1 from "../assets/polo bts 1.png";
import ropabts2 from "../assets/polo bts 2.png";
import ropabts3 from "../assets/polo bts 3.png";
import ropabp1 from "../assets/polo bp 1.png";
import ropabp2 from "../assets/polo bp 2.png";
import ropabp3 from "../assets/polo bp 3.png";
import ropatw1 from "../assets/polo twice 1.png";
import ropatw2 from "../assets/polo twice 2.png";
import ropatw3 from "../assets/polo twice 3.png";
import { useCart } from "../context/CartContext";

function ContenidoCatalogo({ selectedOption }) {
  const { agregarAlCarrito } = useCart();

  if (!selectedOption) {
    return (
      <p className="text-center text-lg italic">
        Selecciona una categoría para ver sus productos ✨
      </p>
    );
  }

  

  // 📌 Productos organizados por categoría
  const tarjetas = {
    albumes: [
      { id: "bts-album-1",nombre: "SKOOL LUV AFFAIR", precio: 120.00, imagen: album1 },
      { id: "bts-album-2",nombre: "BOY IN LUV", precio: 127.50, imagen: album2 },
      { id: "bts-album-3",nombre: "MAP OF THE SOUL", precio: 80.00, imagen: album3 },
      { id: "bts-album-4",nombre: "DYNAMITE", precio: 75.50, imagen: album4 },
      { id: "bts-album5-",nombre: "BUTTER", precio: 88.00, imagen: album9 },
    ],

    albumB: [
      { id:"bp-album-1",nombre: "BORN PINK", precio: 172.00, imagen: album5 },
      { id:"bp-album-2",nombre: "KILL THIS LOVE", precio: 110.00, imagen: album6 },
      { id:"bp-album-3",nombre: "ROSIE LP", precio: 199.00, imagen: album7 },
      { id:"bp-album-4",nombre: "ALTER EGO - LISA", precio: 250.00, imagen: album8 },
    ],

    albumT: [
      { id:"t-album-1",nombre: "FANCY YOU", precio: 350.00, imagen: albumt1 },
      { id:"t-album-2",nombre: "WHAT IS LOVE?", precio: 120.00, imagen: albumt2 },
      { id:"t-album-3",nombre: "I CAN´T STOP ME", precio: 500.00, imagen: albumt3 },
      { id:"t-album-4",nombre: "SIGNAL", precio: 410.00, imagen: albumt4 },
    ],

    accebts: [
      { id: "bts-accesorio-1",nombre: "ALMOHADA DE TERCIOPELO BTS", precio: 25.00, imagen: acceso1 },
      { id: "bts-accesorio-2",nombre: "COJIN ALMOHADA BTS", precio: 25.00, imagen: acceso2 },
      { id: "bts-accesorio-3",nombre: "CUADERNO ANILLADO A4 BTS", precio: 35.00, imagen: acceso3 },
      { id: "bts-accesorio-4",nombre: "CUADERNO ANILLADO A4 BTS", precio: 35.00, imagen: acceso4 },
      { id: "bts-accesorio-6",nombre: "TAZA BTS", precio: 15.00, imagen: acceso5 },
      { id: "bts-accesorio-7",nombre: "TAZA BTS", precio: 15.00, imagen: acceso6 },
    ],

    accebp: [
      { id: "bp-accesorio-1",nombre: "COJIN BLACK PINK", precio: 45.00, imagen: accesobp1 },
      { id: "bp-accesorio-2",nombre: "COJIN BLACK PINK", precio: 45.00, imagen: accesobp2 },
      { id: "bp-accesorio-3",nombre: "CUADERNO ANILLADO BP", precio: 35.00, imagen: accesobp3 },
      { id: "bp-accesorio-4",nombre: "CUADERNO ANILLADO BP", precio: 35.00, imagen: accesobp4 },
      { id: "bp-accesorio-5",nombre: "TAZA PERZONALIZADA BP", precio: 20.00, imagen: accesobp5 },
      { id: "bp-accesorio-6",nombre: "TAZA ORIGINAL BP", precio: 15.00, imagen: accesobp6 },
    ],

    accetw: [
      { id: "t-accesorio-1",nombre: "COJIN TWICE", precio: 55.00, imagen: accesotw1 },
      { id: "t-accesorio-2",nombre: "COJIN TWICE", precio: 45.00, imagen: accesotw2 },
      { id: "t-accesorio-3",nombre: "CUADERNO A4 TWICE", precio: 35.00, imagen: acesotw3 },
      { id: "t-accesorio-4",nombre: "CUADERNO A4 TWICE", precio: 35.00, imagen: accesotw4 },
      { id: "t-accesorio-5",nombre: "TAZA TWICE", precio: 15.00, imagen: accesotw5 },
      { id: "t-accesorio-6",nombre: "TAZA TWICE", precio: 15.00, imagen: accesotw6 },
    ],

    ropabts: [
      { id:"bts-ropa-1",nombre: "POLO ALGODÓN BTS", precio: 25.00, imagen: ropabts1 },
      { id:"bts-ropa-2",nombre: "POLO ALGODÓN BTS", precio: 25.00, imagen: ropabts2 },
      { id:"bts-ropa-3",nombre: "POLO ALGODÓN BTS", precio: 30.00, imagen: ropabts3 },
    ],

    ropabp: [
      { id:"bp-ropa-1",nombre: "POLO ALGODÓN BLACK PINK", precio: 25.00, imagen: ropabp1 },
      { id:"bp-ropa-2",nombre: "POLO ALGODÓN BLACK PINK", precio: 25.00, imagen: ropabp2 },
      { id:"bp-ropa-3",nombre: "POLO ALGODÓN BLACK PINK", precio: 30.00, imagen: ropabp3 },
    ],

    ropatw: [
      { id:"t-ropa-1",nombre: "POLO ALGODÓN TWICE", precio: 25.00, imagen: ropatw1 },
      { id:"t-ropa-2",nombre: "POLO ALGODÓN TWICE", precio: 25.00, imagen: ropatw2 },
      { id:"t-ropa-3",nombre: "POLO ALGODÓN TWICE", precio: 30.00, imagen: ropatw3 },
    ],
  };

  const lista = tarjetas[selectedOption] || [];

  return (
    <div
      className="
        bg-[rgba(245,235,242,0.3)]
        p-5
        rounded-xl
        shadow-md
        text-center
        max-w-[1000px]
        mx-auto
        
        mt-[20px]
        mb-[50px]
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        gap-6
      "
    >
      {lista.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg p-4 text-center shadow-lg transition-transform hover:scale-105"
        >
          <img
            src={item.imagen}
            alt={item.nombre}
            className="w-full h-60 object-cover rounded-lg mb-3"
          />
          <h3 className="text-black font-semibold text-xl">{item.nombre}</h3>
          <p className="text-purple-600 font-bold">S/{item.precio.toFixed(2)}</p>

          <button
            onClick={() =>
              agregarAlCarrito(item)
            }
            className="mt-3 bg-gradient-to-r from-pink-400 to-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90"
          >
            🛒 Comprar
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContenidoCatalogo;


