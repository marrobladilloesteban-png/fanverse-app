import Slider from "react-slick";
import { motion } from "framer-motion"; // 👈 Importamos framer-motion
import blackpink from "../assets/blackpink.jpg";
import grupobts from "../assets/grupobts.jpg";
import twice from "../assets/twice.jpg";
import itzy from "../assets/itzy.jpg";
import banner from "../assets/bannerU.png"
import SeccionProductos from "../components/SeccionProductos"
import { SectionIcon } from "lucide-react";

export default function Inicio() {
  const images = [banner, blackpink, grupobts, twice, itzy];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };



  // 💜 Lista de razon
  const razon = [
    
    {
      nombre: "ACCESO A LANZAMIENTOS RECIENTES",
      imagen:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2FtdnIweTIzbzF6MDVjM21idnI2ZGtpNGw5ZHFqNHVyNTkxZXh3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9ZQ/lRXY41yFFi9RfNXyPN/giphy.gif",
      descripcion:
        "Puedes adquirir álbumes apenas salen al mercado, sin esperar a que lleguen a tiendas físicas.",
    },
    {
      nombre: "RECOMENDACIONES PERSONALIZADAS",
      imagen:
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXd1Z3dod3J3bWE5dnJ4ZXhkYnFnemt4eXlmZzAwNXM1eGhibG1mOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9ZQ/TGXoYOYmVQ9v6M3g1q/giphy.gif",
      descripcion:
        "Basadas en tus gustos musicales, para descubrir nuevos artistas o álbumes.",
    },
    {
      nombre: "SEGURIDAD EN EL PROCESO DE PAGO",
      imagen:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ29jdGlrZnpxbjR4MHBiN3l3cGhmeDNsNTNzc3Ixc3BuaWxneWQ1aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UOQIdYsMcjcuzuUwNZ/giphy.gif",
      descripcion:
        "Métodos de pago confiables y protegidos para una experiencia sin preocupaciones.",
    },
  ];
  const planes = [
  {
    name: "PLAN FREE 😎✨",
    benefits: [
      "Explora el catálogo completo",
      "Descubre nuevos lanzamientos",
    ],
  },
  {
    name: "PLAN CON AMIGOS 👥✨",
    benefits: [
      "10% de descuento en todas las compras",
      "Preventas coordinadas",
      "Sorteos especiales",
    ],
  },
  {
    name: "PLAN VIP 👑✨",
    benefits: [
      "20% de descuento en todas las compras",
      "Acceso prioritario",
      "Photocard Exclusiva",
      "Envío gratis",
    ],
  },
];


  return (
    <main className="pt-24 px-6 max-w-6xl mx-auto text-white">

      {/* 🌸 PROPUESTA DE VALOR */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Donde el <span className="text-white/80">K-Pop</span> vive contigo
        </h1>
        <p className="text-white/90 max-w-2xl mx-auto text-lg">
          Fanverse es la plataforma para fans reales: álbumes originales,
          lanzamientos recientes y una experiencia hecha para tu fandom.
        </p>
      </section>

      {/* 🎠 CARRUSEL */}
      <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-md">
        <Slider {...settings}>
          {images.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`slide-${index}`}
              className="w-full h-[400px] object-cover"
            />
          ))}
        </Slider>
      </div>
      <SeccionProductos/>





      {/* 💡 BENEFICIOS */}
<section className="mt-0 text-center">
  <h2 className="text-3xl font-bold mb-3 text-white">
    ¿Por qué elegir Fanverse?
  </h2>
  <p className="text-white/70 max-w-xl mx-auto">
    Porque tu pasión merece una experiencia segura, moderna y auténtica.
  </p>
</section>

<section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {razon.map((r, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="
        backdrop-blur-md bg-white/10
        border border-white/20
        rounded-2xl p-6
        shadow-lg
        text-center
        hover:bg-white/20
        transition-all
      "
    >
      <img
        src={r.imagen}
        alt={r.nombre}
        className="w-20 h-20 mx-auto mb-4 rounded-full object-cover border border-white/30"
      />

      <h3 className="font-semibold text-white text-lg mb-2">
        {r.nombre}
      </h3>

      <p className="text-sm text-white/70">
        {r.descripcion}
      </p>
    </motion.div>
  ))}
</section>
{/* 💎 PLANES */}
<section className="mt-24 text-center">
  <h2 className="text-3xl font-bold mb-3 text-white">
    PLANES PARA CADA TIPO DE FAN ⚡
  </h2>
  <p className="text-white/90 max-w-xl mx-auto mb-12">
    Elige cómo vivir tu experiencia Fanverse.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {planes.map((plan, i) => (
      <motion.div
        className="
  group
  bg-white
  rounded-2xl
  p-8
  shadow-xl
  cursor-pointer
  transition-all
  duration-300
+ border-2 border-transparent
+ hover:border-purple-500
  hover:bg-purple-200
+ flex flex-col
"

      >
        {/* TÍTULO */}
        <h3
          className="
            text-2xl font-semibold mb-4
            text-black
            group-hover:text-purple-900
            transition-colors
          "
        >
          {plan.name}
        </h3>

        {/* BENEFICIOS */}
        <ul
          className="
            space-y-3
            text-14px
            font-medium
            text-gray-700
            group-hover:text-purple-900
            transition-colors
            mb-6
          "
        >
          {plan.benefits.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-purple-400 group-hover:text-purple-700">
                🎤
              </span>
              <span className="tracking-wide">{item}</span>
            </li>
          ))}
        </ul>

        {/* BOTÓN */}
        <button
          className="
            mt-auto
            px-5 py-2
            text-sm font-semibold
            rounded-full
            bg-black/5 text-black
            group-hover:bg-purple-300
            group-hover:text-purple-900
            transition-all
          "
        >
          Elegir plan
        </button>
      </motion.div>
    ))}
  </div>
</section>


     


      <div className="h-20" />
    </main>
  );
}