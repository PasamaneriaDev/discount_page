import { useState, useEffect } from "react";
import { FaWhatsapp, FaGlobe } from "react-icons/fa";

function App() {
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    fetch("/anuncios.json")
      .then((res) => res.json())
      .then((data) => setAnuncios(data))
      .catch((err) => console.error("Error cargando anuncios:", err));
  }, []);

  const whatsapp = "593962962677";
  const website = "https://www.pasa.ec/71-sale";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center py-16 px-6 font-[Poppins]">
      {/* Fondo morado a todo el ancho con gradiente */}
      <div className="w-full bg-gradient-to-r from-[#452BB2] to-[#5B3CC4] text-white font-bold text-[20px] tracking-wide shadow-lg">
        {/* Contenido centrado */}
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Sección izquierda: raya + texto */}
          <div className="flex items-center">
            <div className="w-[3px] h-[40px] bg-white mr-4 rounded-full"></div>
            <h2 className="text-xl md:text-2xl">DESCUENTOS ACTIVOS</h2>
          </div>

          {/* Imagen alineada a la derecha */}
          <img
            src="/images/pasa.png"
            alt="Logo Pasa"
            className="w-13 h-6 object-contain"
          />
        </div>
      </div>



      {/* Tarjetas */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 w-full max-w-6xl justify-items-center">
        {anuncios.map((a) => (
          <div
            key={a.id}
            className={`border border-gray-200 rounded-[50px] shadow-lg overflow-hidden flex flex-col text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105
              ${a.id === 2 ? "bg-gray-900" : "bg-white"}`}
            style={{ width: "100%", maxWidth: "320px", minHeight: "480px" }}
          >
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div className="mb-4 w-full">
                <div className="relative w-full overflow-hidden rounded-[20px] shadow-md" style={{ maxHeight: "300px" }}>
                  <img
                    src={a.imagen}
                    alt={a.nombre}
                    className="object-cover w-full h-[300px] transition-transform duration-700 hover:scale-110"
                  />

                  {/* Overlay degradado mejorado */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

                  {/* Título mejorado */}
                  <div className="absolute left-4 right-4 bottom-4">
                    <p
                      className={`text-lg font-extrabold drop-shadow-lg leading-tight ${a.id === 2 ? "text-[#d4ec4d]" : "text-white"}`}
                    >
                      {a.nombre}
                    </p>
                  </div>
                </div>
              </div>

              <p
                className={`text-sm text-left leading-relaxed mb-4 flex-grow w-full text-justify
                  ${a.id === 2 ? "text-gray-300" : "text-gray-700"}`}
                style={{ minHeight: "50px" }}
              >
                {a.descripcion}
              </p>
              <ul
                className={`text-xs space-y-2 text-left w-full px-2 ${a.id === 2 ? "text-gray-300" : "text-gray-600"}`}
                style={{
                  minHeight: "70px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Validez:</strong> {a.validez}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Aplica en:</strong> {a.ubicaciones}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Restricciones:</strong> {a.restriciones}</span>
                </li>
              </ul>

            </div>
          </div>
        ))}

      </div>

      {/* Íconos flotantes mejorados */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-10">
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Contactar por WhatsApp"
          className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
        >
          <FaWhatsapp size={28} />
        </a>

        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          title="Visitar sitio web"
          className="bg-blue-500 text-white p-4 rounded-full shadow-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
        >
          <FaGlobe size={28} />
        </a>
      </div>
    </div>
  );
}

export default App;
