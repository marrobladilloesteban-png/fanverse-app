import React from 'react';
import { useSparkleEffect } from '../useSparkleEffect';

// Componente de Tarjeta Reutilizable
const MvCard = ({ icon, title, children }) => (
    <section className="bg-kpop-light-pink border-2 border-black rounded-xl p-5 mb-5 shadow-[5px_5px_0_var(--tw-shadow-color)] shadow-kpop-light-blue">
        <div className="flex items-center mb-2 bg-gradient-to-tr from-kpop-pink to-kpop-blue text-white p-2 rounded-md">
            <span className="text-2xl mr-2 font-Kalam">{icon}</span>
            <h2 className="text-xl font-Pixelify_Sans font-bold text-white">{title}</h2>
        </div>
        <p className="font-Kalam text-base leading-relaxed text-kpop-text">
            {children}
        </p>
    </section>
);

// Componente Principal de la Página
const MisionVisionPage = () => {
    // LLAMADA AL HOOK CORREGIDO
    useSparkleEffect();

    return (
        <div className="min-h-screen w-full flex justify-center items-center bg-kpop-gradient bg-fixed p-5">
            {/* Contenedor para las chispas */}
            <div className="sparkle-container fixed inset-0 z-[9999] pointer-events-none"></div>

            {/* Encabezado fijo (DEBE SER REEMPLAZADO POR EL COMPONENTE DE NAV) */}
            <header className="fixed top-0 left-0 w-full z-[1000] bg-white shadow-md p-2">
                 <p className="text-center font-Bebas_Neue text-3xl text-kpop-accent">FANVERSE NAV BAR (ADAPTAR Y REEMPLAZAR)</p>
            </header>

            {/* Ventana Principal (y2k-window) */}
            <div className="w-11/12 max-w-[900px] bg-[#f7f7f7] border-2 border-black border-r-4 border-b-4 border-gray-500 shadow-[8px_8px_0_rgba(0,0,0,0.2)] overflow-hidden mt-[155px] relative z-10">
                
                {/* Header de la Ventana */}
                <div className="bg-gradient-to-r from-kpop-pink to-kpop-blue border-b-2 border-black p-2 flex justify-between items-center font-Pixelify_Sans font-bold uppercase text-white">
                    <div className="text-lg">MISIÓN Y VISIÓN 🎵</div>
                    <div className="flex space-x-1">
                        <button className="bg-[#e0e0e0] border-2 border-black w-5 h-5 text-sm leading-none cursor-pointer">-</button>
                        <button className="bg-[#e0e0e0] border-2 border-black w-5 h-5 text-sm leading-none cursor-pointer">⬜</button>
                        <button className="bg-[#e0e0e0] border-2 border-black w-5 h-5 text-sm leading-none cursor-pointer">❌</button>
                    </div>
                </div>

                {/* Contenido */}
                <div className="p-5 bg-white text-kpop-text">
                    <div className="text-center mb-8 border-b-2 border-dashed border-gray-300 pb-5">
                        <img src="/multimedia/fanverse-logo.png" alt="Logo de la Empresa" className="max-w-[150px] h-auto mx-auto" />
                    </div>

                    {/* Misión y Visión (Componentes) */}
                    <MvCard icon="🎤" title="Misión">
                         Convertirnos en la plataforma líder de venta de álbumes de K-pop en Latinoamérica, uniendo a los fans con sus
                         grupos favoritos a través de una experiencia de compra confiable, divertida y hecha a la medida de cada
                         fandom.
                    </MvCard>
                    <MvCard icon="🌟" title="Visión">
                         Brindar a cada fan la facilidad de encontrar en un solo lugar todos los álbumes de sus artistas favoritos,
                         asegurando acceso a lanzamientos exclusivos, pre-orders y ediciones especiales. Queremos que nuestra tienda no
                         sea solo un punto de compra, sino un espacio que celebre la pasión y la energía del K-pop junto a su
                         comunidad.
                    </MvCard>

                    {/* Sección de Valores (GRID) */}
                    <section className="bg-kpop-light-blue border-2 border-black rounded-xl p-5 mb-5 shadow-[5px_5px_0_var(--tw-shadow-color)] shadow-kpop-light-pink">
                        <h2 className="font-Pixelify_Sans text-2xl text-center mb-5 bg-gradient-to-r from-kpop-pink to-kpop-blue text-white p-2 rounded-md">💖 VALORES 🎵</h2>
                        
                        {/* El diseño de la rejilla (GRID) */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            
                            {/* Ítems de Valor */}
                            <div className="text-center bg-[#f7f7f7] p-4 rounded-lg shadow-[3px_3px_0_var(--tw-shadow-color)] shadow-kpop-pink">
                                <span className="text-2xl block mb-2">🎶</span>
                                <h3 className="font-bold text-lg">Constancia</h3>
                                <p className="text-sm">...</p>
                                <button className="bg-kpop-pink text-white px-3 py-1 text-base cursor-pointer rounded-md shadow-[3px_3px_0_var(--tw-shadow-color)] shadow-kpop-blue transition hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_var(--tw-shadow-color)] hover:shadow-kpop-blue mt-2">¡Perseverancia!</button>
                            </div>
                            <div className="text-center bg-[#f7f7f7] p-4 rounded-lg shadow-[3px_3px_0_var(--tw-shadow-color)] shadow-kpop-pink">
                                <span className="text-2xl block mb-2">🎤</span>
                                <h3 className="font-bold text-lg">Totalidad</h3>
                                <p className="text-sm">...</p>
                                <button className="bg-kpop-pink text-white px-3 py-1 text-base cursor-pointer rounded-md shadow-[3px_3px_0_var(--tw-shadow-color)] shadow-kpop-blue transition hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_var(--tw-shadow-color)] hover:shadow-kpop-blue mt-2">¡Integridad!</button>
                            </div>
                            <div className="text-center bg-[#f7f7f7] p-4 rounded-lg shadow-[3px_3px_0_var(--tw-shadow-color)] shadow-kpop-pink">
                                <span className="text-2xl block mb-2">🎧</span>
                                <h3 className="font-bold text-lg">Tolerancia</h3>
                                <p className="text-sm">...</p>
                                <button className="bg-kpop-pink text-white px-3 py-1 text-base cursor-pointer rounded-md shadow-[3px_3px_0_var(--tw-shadow-color)] shadow-kpop-blue transition hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_var(--tw-shadow-color)] hover:shadow-kpop-blue mt-2">¡Paciencia!</button>
                            </div>
                            <div className="text-center bg-[#f7f7f7] p-4 rounded-lg shadow-[3px_3px_0_var(--tw-shadow-color)] shadow-kpop-pink">
                                <span className="text-2xl block mb-2">🌈</span>
                                <h3 className="font-bold text-lg">Decisión</h3>
                                <p className="text-sm">...</p>
                                <button className="bg-kpop-pink text-white px-3 py-1 text-base cursor-pointer rounded-md shadow-[3px_3px_0_var(--tw-shadow-color)] shadow-kpop-blue transition hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_var(--tw-shadow-color)] hover:shadow-kpop-blue mt-2">¡Determinación!</button>
                            </div>
                        </div>
                    </section>

                    {/* Sección CTA (FLEXBOX) */}
                    <section className="bg-kpop-light-pink border-2 border-black rounded-xl p-5 mb-5 shadow-[5px_5px_0_var(--tw-shadow-color)] shadow-kpop-light-blue text-center">
                        <h2 className="font-Pixelify_Sans text-2xl text-center mb-5 bg-gradient-to-r from-kpop-pink to-kpop-blue text-white p-2 rounded-md">¡Únete a la fiesta!</h2>
                        <p className="mb-5">
                            <img 
                                src="https://media1.tenor.com/m/1pluedrae0cAAAAd/kpdh-kpop.gif" 
                                alt="Grupo de K-pop bailando" 
                                className="mx-auto w-full md:w-2/5 rounded-lg shadow-lg"
                            />
                        </p>
                        
                        {/* El diseño flexible (FLEXBOX) */}
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-5">
                            <a href="index.html" className="w-full md:w-auto">
                                <button className="w-full md:w-auto bg-kpop-pink text-white px-5 py-2 font-Pixelify_Sans text-lg cursor-pointer rounded-md shadow-[3px_3px_0_var(--tw-shadow-color)] shadow-kpop-blue transition hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_var(--tw-shadow-color)] hover:shadow-kpop-blue">
                                    ¡Comienza la música!
                                </button>
                            </a>
                            <a href="formulario.html" className="w-full md:w-auto">
                                <button className="w-full md:w-auto bg-kpop-pink text-white px-5 py-2 font-Pixelify_Sans text-lg cursor-pointer rounded-md shadow-[3px_3px_0_var(--tw-shadow-color)] shadow-kpop-blue transition hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0_var(--tw-shadow-color)] hover:shadow-kpop-blue">
                                    ¡Deja tu feedback!
                                </button>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MisionVisionPage;