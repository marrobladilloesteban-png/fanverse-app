import Slider from "react-slick";
import { motion } from "framer-motion"; // 👈 Importamos framer-motion
import blackpink from "../assets/blackpink.jpg";
import grupobts from "../assets/grupobts.jpg";
import twice from "../assets/twice.jpg";
import itzy from "../assets/itzy.jpg";
import banner from "../assets/bannerU.png"

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

  // 💜 Lista de bandas para las cartillas
  const bandas = [
    {
      nombre: "BTS",
      imagen:
        "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGFsa2g2MGVpOGt5dDR3NWFyeHhseDUxeWhjcmhid2sxMmY5aXo5NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CLhMG06HSUoMiZ1PXB/giphy.gif",
      descripcion:
        "BTS canta enérgicas canciones de pop con mensajes de confianza y superación, perfectas para animarte a perseguir tus sueños",
    },
    {
      nombre: "BLACKPINK",
      imagen:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmxnbjZ0ZmRjbjhiZncyeDFoN256eWVsbTIzNTd1NjdtNnQ0dXltZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT3i1cvbSQSXENS9rO/giphy.gif",
      descripcion:
        "BLACKPINK Conocidas por su estilo poderoso. Fusionan pop, dance con toques de hip-hop, y cantan sobre confianza, independencia y empoderamiento.",
    },
    {
      nombre: "STRAYKIDS",
      imagen:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWZxOHVweG9sZXIyeHc2b3V4emczczJibmQxeTljaW5vbmo0NDZncSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/34McE64PE0ypRpMjTf/giphy.gif",
      descripcion:
        "Juventud explosiva que mezcla hip-hop, pop y EDM con letras crudas y coreografías potentes.Hablan de amistad, fuerza interior y superación",
    },
    {
      nombre: "TWICE",
      imagen:
        "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW85dTZiMnZ6NWFxdnduc3h1ejRwazBkczcwZzkxMHFtM3M1NTNnZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2YWzCwgfB0GJTii4/giphy.gif",
      descripcion:
        "Combinan electropop brillante y coreografías con letras sobre amor, autoestima y juventud. Su música transmite pura energía positiva.",
    },
    {
      nombre: "SEVENTEEN",
      imagen:
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3dxMWxnOTF2bnptdTR0dzB1ZTJzY3dzbndjYnFuM2pnYnljYzBtNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrhZgWvxd4yozMQ/giphy.gif",
      descripcion:
        "Brillan con pop, hip-hop y EDM, coros pegajosos y química explosiva. Sus letras celebran la amistad, el crecimiento y el optimismo.",
    },
    {
      nombre: "ITZY",
      imagen:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXh6bWk2ZzQ5cGNpZTNlZjJvYWZsNjVldTdvZTkxZWhieXJiaWVueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KkaSMnv6q48mCWx0fg/giphy.gif",
      descripcion:
        "Destacan energía con pop vibrante, electropop y dance. Sus letras empoderan con confianza, ritmo acelerado y actitud feroz.",
    },
  ];

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

  return (
    <main className="text-center p-6 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-4 drop-shadow-lg text-white/90">
        Fanverse: Donde tu pasión por la música encuentra su lugar
      </h1>
      <p className="mb-6">
        Somos más que una tienda: es el lugar donde los verdaderos fans viven
        su pasión. Encuentra los álbumes de tus idols favoritos, descubre
        lanzamientos recientes antes que nadie y haz crecer tu colección con
        solo unos clics. ¡Explora, vibra y colecciona al ritmo del K-pop!
      </p>

      {/* 🎠 Carrusel */}
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-md mx-auto">
        <Slider {...settings}>
          {images.map((url, index) => (
            <div key={index}>
              <img
                src={url}
                alt={`Imagen ${index + 1}`}
                className="w-full h-[400px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* 🎵 Título de las bandas */}
      <section className="text-center mt-10">
        <h1 className="text-3xl font-bold mb-3">BANDAS MÁS POPULARES</h1>
        <p className="text-lg max-w-xl mx-auto">
          Descubre nuestros productos y conoce más sobre tus grupos favoritos 💖
        </p>
      </section>

      {/* 🎶 Cartillas de bandas */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {bandas.map((banda, index) => (
          <motion.div
            key={index}
            className="bg-white text-indigo-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={banda.imagen}
              alt={banda.nombre}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{banda.nombre}</h3>
              <p className="text-sm">{banda.descripcion}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="text-center mt-10">
        <h2 className="text-3xl font-bold mb-3">¿Por qué Fanverse? Porque tu pasión merece un lugar donde suene fuerte.</h2>
        
      </section>

      {/* 🎶 Cartillas de beneficios */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {razon.map((razon, index) => (
          <motion.div
            key={index}
            className="text-center bg-white-300 text-indigo-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={razon.imagen}
              alt={razon.nombre}
              className="w-35 h-35 object-cover ml-20"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{razon.nombre}</h3>
              <p className="text-sm">{razon.descripcion}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
