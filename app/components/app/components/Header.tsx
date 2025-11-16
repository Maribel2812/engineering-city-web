import Header from "@/app/components/Header"; // RUTA CORREGIDA

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Tarjeta 1: TÍTULO DE SERVICIOS */}
        <div className="p-6 rounded-lg shadow-md border border-gray-700 bg-gray-800 w-full max-w-5xl mb-8">
          <h1 className="text-3xl font-bold mb-4 text-white">
            Nuestros Servicios de Ingeniería y Construcción
          </h1>
          <p className="text-gray-300">
            En Engineering City S.A.S ofrecemos soluciones integrales para proyectos de alta complejidad.
          </p>
        </div>

        {/* Tarjeta 2: DETALLE DE SERVICIOS */}
        <div className="p-6 rounded-lg shadow-md border border-gray-700 bg-gray-800 w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Áreas Clave
          </h2>
          <ul className="list-disc ml-6 text-gray-300">
            <li>
              **Arquitectura e Ingeniería:** Desarrollo de planos estructurales, diseño asistido por computadora (CAD) y modelado BIM.
            </li>
            <li>
              **Consultoría Técnica:** Estudios de viabilidad, análisis de riesgos y gestión de licencias de construcción.
            </li>
            <li>
              **Construcción de Obras Civiles:** Edificación de infraestructuras residenciales, comerciales e industriales.
            </li>
            <li>
              **Transporte Mixto:** Diseño e implementación de soluciones logísticas y vías de acceso.
            </li>
          </ul>
        </div>
        
      </main>
    </>
  );
}