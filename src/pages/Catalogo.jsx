import { useState } from "react";
import ContenidoCatalogo from "./ContenidoCatalogo";

function Catalogo() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  // 🔄 Abre y cierra los menús desplegables sin tapar los demás
  const toggleDropdown = (product) => {
  setOpenDropdown(openDropdown === product ? null : product);
  setSelectedOption(null); // ← RESETEA LAS OPCIONES AL CAMBIAR DE GRUPO
};


  // ✅ Cambia la categoría seleccionada
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 to-indigo-400 text-white p-6 pt-24">
      <h1 className="text-4xl font-bold text-center mb-8 drop-shadow-lg">Catálogo</h1>

      {/* 🔹 Menú principal */}
      <div className="flex flex-wrap justify-center items-start gap-6 mb-10 relative">
        {/* 🩷 BTS */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("BTS")}
            className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-lg shadow hover:bg-pink-200 transition"
          >
            BTS
          </button>
          {openDropdown === "BTS" && (
            <div className="absolute left-0 mt-2 bg-white text-indigo-700 rounded-lg shadow-lg z-20">
              <button
                onClick={() => handleOptionClick("albumes")}
                className="block px-4 py-2 hover:bg-pink-100 w-full text-left rounded-t-lg"
              >
                Álbumes
              </button>
              <button
                onClick={() => handleOptionClick("accebts")}
                className="block px-4 py-2 hover:bg-pink-100 w-full text-left"
              >
                Accesorios
              </button>
              <button
                onClick={() => handleOptionClick("ropabts")}
                className="block px-4 py-2 hover:bg-pink-100 w-full text-left rounded-b-lg"
              >
                Ropa
              </button>
            </div>
          )}
        </div>

        {/* 💜 BLACKPINK */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("BLACKPINK")}
            className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-lg shadow hover:bg-pink-200 transition"
          >
            BLACKPINK
          </button>
          {openDropdown === "BLACKPINK" && (
            <div className="absolute left-0 mt-2 bg-white text-indigo-700 rounded-lg shadow-lg z-20">
              <button
                onClick={() => handleOptionClick("albumB")}
                className="block px-4 py-2 hover:bg-pink-100 w-full text-left rounded-t-lg"
              >
                Álbumes
              </button>
              <button
                onClick={() => handleOptionClick("accebp")}
                className="block px-4 py-2 hover:bg-pink-100 w-full text-left rounded-b-lg"
              >
                Accesorios
              </button>
              <button
                onClick={() => handleOptionClick("ropabp")}
                className="block px-4 py-2 hover:bg-pink-100 w-full text-left rounded-b-lg"
              >
                Ropa
              </button>
            </div>
          )}
        </div>

        {/* 💙 TWICE */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("TWICE")}
            className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-lg shadow hover:bg-pink-200 transition"
          >
            TWICE
          </button>
          {openDropdown === "TWICE" && (
            <div className="absolute left-0 mt-2 bg-white text-indigo-700 rounded-lg shadow-lg z-20">
              <button
                onClick={() => handleOptionClick("albumT")}
                className="block px-4 py-2 hover:bg-pink-100 w-full text-left rounded-t-lg"
              >
                Álbumes
              </button>
              <button
                onClick={() => handleOptionClick("accetw")}
                className="block px-4 py-2 hover:bg-pink-100 w-full text-left"
              >
                Accesorios
              </button>
              <button
                onClick={() => handleOptionClick("ropatw")}
                className="block px-4 py-2 hover:bg-pink-100 w-full text-left rounded-b-lg"
              >
                Ropa
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 🔸 Contenido dinámico */}
      <div className="relative z-10">
        <ContenidoCatalogo selectedOption={selectedOption} />
      </div>
    </div>
  );
}

export default Catalogo;
