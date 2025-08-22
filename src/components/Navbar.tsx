import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 py-4 px-8 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center space-x-3">
              {/* Logo PNG */}
              <img 
                src="/Logo Moon Drakon.png" 
                alt="The Moon Drakon Logo" 
                className="h-8 w-auto"
              />
              {/* Texto del logo */}
              <div className="text-xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 bg-clip-text text-transparent">The Moon</span>
                <span className="bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent"> Drakon</span>
              </div>
            </div>
          </div>
          {/* Menú Central - SUPER MEGA ULTRA HIPER ANIMADO */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <a 
                href="#quienes-somos" 
                className="group relative text-white font-semibold text-lg transition-all duration-500 hover:text-transparent hover:scale-110"
              >
                <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-600">
                  Quienes Somos
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-500"></div>
              </a>
            </li>
            <li>
              <a 
                href="#paquetes" 
                className="group relative text-white font-semibold text-lg transition-all duration-500 hover:text-transparent hover:scale-110"
              >
                <span className="relative z-10 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 bg-clip-text group-hover:from-green-400 group-hover:via-yellow-500 group-hover:to-orange-500">
                  Paquetes
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-orange-500 group-hover:w-full transition-all duration-500"></div>
              </a>
            </li>
            <li>
              <a 
                href="#contacto" 
                className="group relative text-white font-semibold text-lg transition-all duration-500 hover:text-transparent hover:scale-110"
              >
                <span className="relative z-10 bg-gradient-to-r from-pink-400 via-red-500 to-orange-500 bg-clip-text group-hover:from-pink-400 group-hover:via-red-500 group-hover:to-orange-500">
                  Contacto
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-red-500 to-orange-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-red-500 to-orange-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-orange-500 group-hover:w-full transition-all duration-500"></div>
              </a>
            </li>
          </ul>
          {/* Botones Derecha */}
          <div className="hidden lg:flex justify-center space-x-8 items-center">
            <a href="#" className="text-white py-2 px-3 hover:text-neutral-300 transition-colors">ES</a>
            <a 
              href="https://wa.me/524425713606?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20de%20sitios%20web%2C%20quisiera%20una%20cotización" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              <span className="relative z-10">Cotizar Proyecto</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}