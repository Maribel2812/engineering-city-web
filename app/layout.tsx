import { Inter } from "next/font/google"; // Importamos la fuente Inter
import "./globals.css";

// Definición de la fuente: Next.js la optimiza automáticamente
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Engineering City S.A.S",
  description: "Empresa dedicada a la arquitectura, ingeniería y consultoría técnica en Bogotá.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* Aplicamos la nueva fuente, el fondo gris oscuro (bg-gray-900) y texto blanco (text-white) */}
      <body className={`${inter.className} bg-gray-900 text-white`}> 
        {children}
      </body>
    </html>
  );
}