import Header from "@/app/components/Header"; 

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Tarjeta 1: BIENVENIDOS */}
        <div className="p-6 rounded-lg shadow-md border border-gray-700 bg-gray-800 w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Bienvenidos a Engineering City S.A.S
          </h2>
          <p className="text-gray-300">
            Empresa dedicada a la arquitectura, ingeniería y consultoría técnica en Bogotá, Colombia.
          </p>
        </div>

        {/* Tarjeta 2: QUIÉNES SOMOS */}
        <div className="p-6 rounded-lg shadow-md border border-gray-700 bg-gray-800 w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Quiénes Somos
          </h2>
          <p className="text-gray-300">
            Engineering City S.A.S es una empresa fundada en 2014, especializada en servicios de arquitectura, ingeniería
            y consultoría técnica.
          </p>
        </div>

        {/* Tarjeta 3: SERVICIOS */}
        <div className="p-6 rounded-lg shadow-md border border-gray-700 bg-gray-800 w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Servicios
          </h2>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Arquitectura e ingeniería</li>
            <li>Consultoría técnica</li>
            <li>Construcción de obras civiles</li>
            <li>Transporte mixto</li>
          </ul>
        </div>

        {/* Tarjeta 4: PROYECTOS */}
        <div className="p-6 rounded-lg shadow-md border border-gray-700 bg-gray-800 w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Proyectos
          </h2>
          <p className="text-gray-300">
            Próximamente encontrarás aquí algunos de nuestros proyectos destacados.
          </p>
        </div>

        {/* Tarjeta 5: CONTACTO */}
        <div className="p-6 rounded-lg shadow-md border border-gray-700 bg-gray-800 w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Contacto
          </h2>
          <p className="text-gray-300">
            Dirección: Calle 151 #96A-21, Bogotá, Colombia
            <br />
            Teléfono: (1) 6925639
          </p>
        </div>

      </main>
    </>
  );
}