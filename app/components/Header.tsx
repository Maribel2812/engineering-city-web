import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900">Engineering City S.A.S</span>
          </Link>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Inicio</Link>
              <Link href="/quienes-somos" className="text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Quiénes somos</Link>
              <Link href="/servicios" className="text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Servicios</Link>
              <Link href="/proyectos" className="text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Proyectos</Link>
              <Link href="/contacto" className="text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Contacto</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
