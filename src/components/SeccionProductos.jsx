import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import album9 from "../assets/album-bts5.png";
import album8 from "../assets/album-bp4.png";
import albumt1 from "../assets/album-twice1.jpg";
import albums1 from "../assets/abum-seventeen1.png";
import acceso1 from "../assets/almohada bts 1.png";
import acceso4 from "../assets/cuaderno bts 2.png";
import acceso5 from "../assets/taza bts 1.jpg";
import accesobp2 from "../assets/almohada bp 2.png";
import accesobp3 from "../assets/cuaderno bp 1.png";
import accesobp6 from "../assets/taza bp 2.png";
import accesotw4 from "../assets/cuaderno twice 2.png";
import accesotw5 from "../assets/taza twice 1.png";
import ropabp3 from "../assets/polo bp 3.png";
import ropatw1 from "../assets/polo twice 1.png";
const productos = [
  {
    nombre: "BTS – Butter",
    imagen: album9,
    descripcion: "Álbum antología que celebra la historia de BTS 💜",
  },
  {
    nombre: "BLACKPINK – Alter Egok",
    imagen: album8,
    descripcion: "El regreso más poderoso del girl group global 🖤💗",
  },
  {
    nombre: "Twice – Fancy You",
    imagen: albumt1,
    descripcion: "Energía intensa y sonido único ⭐",
  },
  {
    nombre: "Seventeen – An Ode",
    imagen: albums1,
    descripcion: "Elegancia y frescura del K-pop actual ✨",
  },
  {
    nombre: "BTS – Cojín",
    imagen: acceso1,
    descripcion: "Comodo cojín de algon de BTS 💜",
  },
  {
    nombre: "Blackpink – Taza",
    imagen: accesobp6,
    descripcion: "Taza de porcelana perzonalizada",
  },
  {
    nombre: "Twice – Polo",
    imagen: ropatw1,
    descripcion: "Polo s,m,l de algodón",
  },
  {
    nombre: "BTS – Cuaderno",
    imagen: acceso4,
    descripcion: "Cuaderno anillado A4 de 250 hojas",
  },
  {
    nombre: "Blackpink – Polo",
    imagen: ropabp3,
    descripcion: "Polo de algodón, fresco y comodo",
  },
  {
    nombre: "BTS – Taza",
    imagen: acceso5,
    descripcion: "Taza de porcelana perzonalizada",
  },
  {
    nombre: "Blackpink – Almohada",
    imagen: accesobp2,
    descripcion: "Almohada pequeña de decoración",
  },
  {
    nombre: "Twice – Cuaderno",
    imagen: accesotw4,
    descripcion: "Cuaderno anillado A3, 100 hojas",
  },
  {
    nombre: "Blackpink – Cuaderno",
    imagen: accesobp3,
    descripcion: "Cuaderno A4 de 300 hojas, cuadriculado",
  },
  {
    nombre: "Twice – Taza",
    imagen: accesotw5,
    descripcion: "Taza de porcelana perzonalizada",
  },
];

export default function ProductosCarousel() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    sliderRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  /* 🔁 Auto-scroll cada 5 segundos */
  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      
      {/* FRASE */}
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        🎶 Descubre tus productos favoritos ❤✨
      </h2>

      {/* CONTENEDOR */}
      <div className="relative flex items-center">
        
        {/* BOTÓN IZQUIERDO */}
        <button
          onClick={() => scroll("left")}
          className="
            hidden md:flex
            absolute
            -left-14
            bg-black/80
            text-white
            p-3
            rounded-full
            shadow-lg
            hover:scale-110
            transition
            z-20
          "
        >
          <ChevronLeft size={22} />
        </button>

        {/* CARRUSEL */}
        <div
          ref={sliderRef}
          className="
            grid
            grid-flow-col
            auto-cols-[100%]
            sm:auto-cols-[50%]
            lg:auto-cols-[33.333%]
            gap-6
            overflow-x-auto
            scroll-smooth
            no-scrollbar
            px-2
          "
        >
          {productos.map((p, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-2xl
                p-4
                shadow-lg
                border border-black/10
                hover:scale-105
                transition
                text-center
              "
            >
              <img
                src={p.imagen}
                alt={p.nombre}
                className="h-50 mx-auto object-contain mb-3"
              />

              <h3 className="text-base font-semibold mb-1">
                {p.nombre}
              </h3>

              <p className="text-sm text-gray-600">
                {p.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* BOTÓN DERECHO */}
        <button
          onClick={() => scroll("right")}
          className="
            hidden md:flex
            absolute
            -right-14
            bg-black/80
            text-white
            p-3
            rounded-full
            shadow-lg
            hover:scale-110
            transition
            z-20
          "
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}


