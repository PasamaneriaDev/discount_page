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
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center py-16 px-6">
      {/* Título */}
      <div className="w-full max-w-6xl">
        <h2 className="text-lg font-bold tracking-wide text-[#3B2BA2] border-b-4 border-[#3B2BA2] pb-2">
          DESCUENTOS ACTIVOS
        </h2>
      </div>

      {/* Grid de tarjetas */}
      <div className="grid md:grid-cols-3 gap-8 mt-10 w-full max-w-5xl">
        {anuncios.map((a) => (
          <div
            key={a.id}
            className="border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
          >
            {/* Imagen */}
            <div className="relative w-full h-60 overflow-hidden">
              <img
                src={a.imagen}
                alt={a.nombre}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                {a.nombre}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {a.descripcion}
              </p>

              <ul className="text-sm text-gray-600 space-y-1 mt-auto">
                <li>
                  <strong>Validez:</strong> {a.validez}
                </li>
                <li>
                  <strong>Aplica en:</strong> {a.ubicaciones}
                </li>
                <li>
                  <strong>Restricciones:</strong> {a.restriciones}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Íconos flotantes */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
        >
          <FaWhatsapp size={24} />
        </a>

        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110"
        >
          <FaGlobe size={24} />
        </a>
      </div>
    </div>
  );
}

export default App;
