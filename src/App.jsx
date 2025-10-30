import { useState, useEffect } from "react";
import { FaWhatsapp, FaGlobe, FaMoon, FaSun } from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Al cargar, leer el tema guardado
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

    const [anuncios, setAnuncios] = useState([]);

   useEffect(() => {
    fetch("/anuncios.json")
      .then((res) => res.json())
      .then((data) => {
        setAnuncios(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando anuncios:", err);
        setLoading(false);
      });
  }, []);


  const whatsapp = "593962962677";
  const website = "https://www.pasa.ec/71-sale";

  return (
    <div
      style={{ fontFamily: "sans-serif" }}
      className={`min-h-screen flex flex-col items-center py-12 px-4 transition-colors duration-500 ${
        darkMode ? "bg-gray-900" : "bg-gradient-to-b from-white to-gray-100"
      }`}
    >
      <h1
        className={`text-4xl font-extrabold mb-10 text-center tracking-wide ${
          darkMode ? "text-gray-100" : "text-gray-800"
        }`}
      >
        Descuentos Activos
      </h1>

      <div className="grid gap-10 w-full max-w-5xl">
        {anuncios.map((a) => (
          <div
            key={a.id}
            className="bg-[#042649FF] rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row group"
          >
            <img
              src={a.imagen}
              alt={a.nombre}
              className="w-full md:w-1/2 object-cover h-64 md:h-auto group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-8 flex flex-col justify-between">
              <div>
                <h2
                  className="text-3xl font-bold mb-4 bg-gradient-to-r 
                    from-blue-700 via-purple-500 to-pink-400 
                    dark:from-cyan-300 dark:via-indigo-400 dark:to-purple-500 
                    bg-clip-text text-transparent animate-gradient tracking-tight 
                    hover:brightness-125 transition-all duration-300"
                >
                  {a.nombre}
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {a.descripcion}
                </p>

                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>
                    <strong className="text-gray-800 dark:text-gray-200">
                      Validez:
                    </strong>{" "}
                    {a.validez}
                  </li>
                  <li>
                    <strong className="text-gray-800 dark:text-gray-200">
                      Aplica en:
                    </strong>{" "}
                    {a.ubicaciones}
                  </li>
                  <li>
                    <strong className="text-gray-800 dark:text-gray-200">
                      Restricciones:
                    </strong>{" "}
                    {a.restriciones}
                  </li>
                </ul>
              </div>
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
