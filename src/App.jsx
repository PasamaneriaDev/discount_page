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
    <div className="min-h-screen bg-white flex flex-col items-center py-16 px-6 font-[Poppins]">
      {/* Fondo morado a todo el ancho */}
      <div className="w-full bg-[#452BB2] text-white font-bold text-[20px] tracking-wide">
        {/* Contenido centrado */}
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Sección izquierda: raya + texto */}
          <div className="flex items-center">
            <div className="w-[3px] h-[40px] bg-white mr-3"></div>
            <h2>DESCUENTOS ACTIVOS</h2>
          </div>

          {/* Imagen alineada a la derecha */}
          <img
            src="src/assets/images/pasa.png"
            alt="icono"
            className="w-13 h-6 object-contain"
          />
        </div>
      </div>



      {/* Tarjetas */}
      <div className="grid md:grid-cols-3 gap-10 mt-12 w-full max-w-5xl justify-items-center">
        {anuncios.map((a, index) => (
          <div
            key={a.id}
            className={`border border-[#1d1d1d] rounded-[50px] shadow-md overflow-hidden flex flex-col text-center transition-all duration-300 hover:shadow-xl 
              ${a.id === 2 ? "bg-black" : "bg-white"}`}


            style={{ width: "100%", maxWidth: "320px", minHeight: "470px" }}
          >
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h3 className="text-[15pt] font-bold mb-4 w-full">
                <div className="relative w-full overflow-hidden rounded-[20px]" style={{ maxHeight: "300px" }}>
                  <img
                    src={a.imagen}
                    alt={a.nombre}
                    className={`object-cover w-full h-[300px] transition-transform duration-500 hover:scale-100`} // <-- imagen más suave o distinta
                  />

                  {/* Overlay degradado */}
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                  {/* Título */}
                  <div className="absolute left-4 right-4 bottom-3">
                    <p
                      className={`text-[12pt] font-extrabold drop-shadow-md ${a.id === 2 ? "text-[#d4ec4d]" : "text-white"}`}
                    >
                      {a.nombre}
                    </p>
                  </div>
                </div>
              </h3>

              <p
                className={`text-[10pt]  text-left leading-snug mb-4 flex-grow w-full text-justify
                  ${a.id === 2 ? "text-gray-300" : "text-black"}`}
                style={{ minHeight: "40px", display: "block", textAlignLast: "left" }}
              >
                {a.descripcion}
              </p>
              <ul
                className={`text-[12px] space-y-1 text-left w-full px-2  ${a.id === 2 ? "text-gray-300" : "text-black"}`}
                style={{
                  minHeight: "60px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <li>
                  <strong>• Validez:</strong> {a.validez}
                </li>
                <li>
                  <strong>• Aplica en:</strong> {a.ubicaciones}
                </li>
                <li>
                  <strong>• Restricciones:</strong> {a.restriciones}
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
