import { motion } from "framer-motion";


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
      "Conocidas por su estilo poderoso. Fusionan pop, dance y hip-hop con mensajes de empoderamiento.",
  },
  {
    nombre: "STRAY KIDS",
    imagen:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWZxOHVweG9sZXIyeHc2b3V4emczczJibmQxeTljaW5vbmo0NDZncSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/34McE64PE0ypRpMjTf/giphy.gif",
    descripcion:
      "Juventud explosiva que mezcla hip-hop, pop y EDM con letras crudas y coreografías potentes.",
  },
  {
    nombre: "TWICE",
    imagen:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW85dTZiMnZ6NWFxdnduc3h1ejRwazBkczcwZzkxMHFtM3M1NTNnZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2YWzCwgfB0GJTii4/giphy.gif",
    descripcion:
      "Electropop brillante con letras sobre amor, autoestima y juventud.",
  },
  {
    nombre: "SEVENTEEN",
    imagen:
      "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3dxMWxnOTF2bnptdTR0dzB1ZTJzY3dzbndjYnFuM2pnYnljYzBtNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrhZgWvxd4yozMQ/giphy.gif",
    descripcion:
      "Pop, hip-hop y EDM con letras que celebran la amistad y el crecimiento.",
  },
  {
    nombre: "ITZY",
    imagen:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXh6bWk2ZzQ5cGNpZTNlZjJvYWZsNjVldTdvZTkxZWhieXJiaWVueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KkaSMnv6q48mCWx0fg/giphy.gif",
    descripcion:
      "Pop vibrante y actitud feroz con mensajes de confianza.",
  },
];

/* ===============================
   COMPONENTE PRINCIPAL
================================ */
export default function SeccionAlbumes() {
  return (
    <main className="pt-0 px-6 max-w-6xl mx-auto text-white">

      {/* 🎵 TÍTULO */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-3 text-white">
          Bandas más populares 🏆
        </h2>
        <p className="text-white/80 max-w-xl mx-auto">
          Explora los grupos que dominan los escenarios y corazones 💿
        </p>
      </section>

      {/* 🎶 GRID DE BANDAS */}
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {bandas.map((banda, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="
              group
              relative
              rounded-3xl
              overflow-hidden
              bg-black
              shadow-xl
              cursor-pointer
            "
          >
            {/* IMAGEN */}
            <img
              src={banda.imagen}
              alt={banda.nombre}
              className="
                h-72 w-full object-cover
                transition-transform duration-500
                group-hover:scale-110
              "
            />

            {/* OVERLAY */}
            <div className="
              absolute inset-0
              bg-black/60
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-300
            " />

            {/* CONTENIDO */}
            <div className="
              absolute inset-0
              flex flex-col justify-end
              p-6
              text-left
            ">
              <h3 className="
                text-2xl font-bold
                text-white
                group-hover:text-pink-300
                transition-colors
              ">
                {banda.nombre}
              </h3>

              <p className="
                mt-2 text-sm
                text-white/80
                leading-relaxed
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
              ">
                {banda.descripcion}
              </p>

              <span className="
                mt-4 inline-block w-fit
                px-4 py-1 text-xs
                rounded-full
                bg-white/10 text-white
                backdrop-blur-md
                group-hover:bg-pink-300
                group-hover:text-black
                transition-all
              ">
                Ver colección
              </span>
            </div>
          </motion.div>
        ))}
      </section>

    </main>
  );
}

