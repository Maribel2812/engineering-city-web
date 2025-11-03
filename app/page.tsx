// CÓDIGO PARA app/page.tsx (USA ESTE)

export default function Home() {
  return (
    // <main> contiene todo el contenido principal
    <main className="min-h-screen bg-gray-100 p-8"> 

      {/* Contenedor principal para centrar el contenido y darle un ancho máximo */}
      <div className="max-w-4xl mx-auto space-y-6"> 

        {/* Bloque: Bienvenidos */}
        <div className="bg-white shadow-lg rounded-lg p-6"> 
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Bienvenidos a Engineering City S.A.S</h1>
          <p className="text-gray-600">Empresa dedicada a la arquitectura, ingeniería y consultoría técnica en Bogotá, Colombia.</p>
        </div>

        {/* Bloque: Quiénes Somos */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Quiénes Somos</h2>
          <p className="text-gray-600">Engineering City S.A.S es una empresa fundada en 2014, especializada en servicios de arquitectura, ingeniería y consultoría técnica.</p>
        </div>

        {/* Bloque: Servicios */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Servicios</h2>
          <ul className="list-disc list-inside text-gray-600 ml-4">
            <li>Arquitectura e ingeniería</li>
            <li>Consultoría técnica</li>
            <li>Construcción de obras civiles</li>
            <li>Transporte mixto</li>
          </ul>
        </div>

        {/* Bloque: Proyectos */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Proyectos</h2>
          <p className="text-gray-600">Próximamente encontrarás aquí algunos de nuestros proyectos destacados.</p>
        </div>

        {/* Bloque: Contacto */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contacto</h2>
          <p className="text-gray-600">Dirección: Calle 151 #96A-21, Bogotá, Colombia</p>
          <p className="text-gray-600">Teléfono: (1) 6925639</p>
        </div>

      </div>
    </main>
  )
}