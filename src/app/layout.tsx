import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar';
import ParticlesBackground from '../components/ParticlesBackground'; // <-- 1. IMPORTA AQUÍ

export const metadata: Metadata = {
  title: 'The Moon Drakon - Desarrollo de Sitios Web',
  description: 'Diseñamos y desarrollamos sitios web ultrarrápidos y visualmente impactantes. Transformamos tus objetivos de negocio en una realidad digital que cautiva y convierte.',
  icons: {
    icon: '/Drakon.ico',
    shortcut: '/Drakon.ico',
    apple: '/Drakon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ParticlesBackground /> {/* <-- 2. AÑADE EL COMPONENTE AQUÍ */}
        {children}
      </body>
    </html>
  )
}