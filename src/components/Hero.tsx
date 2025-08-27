/*hero.tsx*/
"use client"; // Necesario para la animación del texto

import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  


  const strings = [
    'que tu negocio necesita.',
    'que convierte visitantes en clientes.',
    'que vende mientras duermes.',
  ];

  const colors = ['#ef4444', '#f97316', '#22c55e', '#3b82f6', '#1d4ed8']; // Rojo, Naranja, Verde, Azul claro, Azul oscuro

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    
    if (charIndex < currentString.length) {
      intervalRef.current = setTimeout(() => {
        setDisplayText(currentString.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 75);
    } else {
      // Pausa antes de borrar
      intervalRef.current = setTimeout(() => {
        setDisplayText('');
        setCharIndex(0);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
      }, 2000);
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [charIndex, currentStringIndex, strings]);

  const renderColoredText = () => {
    return displayText.split('').map((char, index) => {
      // Solo la última letra (la más reciente) mantiene el color
      const isLatestChar = index === displayText.length - 1;
      const colorIndex = index % colors.length;
      const color = isLatestChar ? colors[colorIndex] : 'white';
      
      return (
        <span
          key={index}
          style={{ color: color }}
          className="transition-colors duration-300"
        >
          {char}
        </span>
      );
    });
  };



  return (
    <div className="relative z-10 min-h-screen flex items-center">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido Principal */}
          <div>
            {/* Título Principal con animación */}
                          <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                <span className="block">El sitio web</span>
                <span className="min-h-[1.2em] block">
                  {renderColoredText()}
                  <span className="text-white animate-pulse">|</span>
                </span>
              </h1>
            
            {/* Descripción (basada en tu VISIÓN) */}
            <p className="text-xl text-white/80 max-w-lg leading-relaxed mb-8">
              Potenciamos la productividad, las ventas y la experiencia del cliente para PYMES hispanas a través de la automatización inteligente en WhatsApp.
            </p>
            
            {/* Botón CTA */}
            <div className="mb-8">
              <a 
                href="https://wa.me/524425713606?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20de%20sitios%20web%2C%20quisiera%20una%20cotización" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 text-lg inline-flex items-center justify-center transform hover:-translate-y-1"
              >
                <span className="relative z-10">Cotizar Proyecto</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                {/* Efecto de partículas flotantes */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping group-hover:animate-pulse"></div>
                  <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping group-hover:animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="absolute bottom-2 left-4 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping group-hover:animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </a>
            </div>
          </div>

          {/* Carrusel 3D de Sitios Web */}
          <div className="flex flex-col items-center justify-center h-full">
            <div className="carousel-container">
              {/* Video 1 */}
              <a 
                href="https://vegalfredo.github.io/Curso-de-Verano-ZEFFATA/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="carousel-item absolute rounded-xl shadow-2xl border-2 border-white/20 cursor-pointer hover:scale-110 transition-transform duration-300 block overflow-hidden" 
                style={{animationDelay: '0s'}}
                data-position="0"
              >
                <video 
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/sitio_01.mp4" type="video/mp4" />
                </video>
              </a>
              
              {/* Video 2 - sitio_02.mp4 */}
              <a 
                href="https://vegalfredo.github.io/-Quien-soy-yo-/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="carousel-item absolute rounded-xl shadow-2xl border-2 border-white/20 cursor-pointer hover:scale-110 transition-transform duration-300 block overflow-hidden" 
                style={{animationDelay: '-1.7s'}}
              >
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/sitio_02.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </a>
              
              {/* Video 3 - sitio_03.mp4 */}
              <a 
                href="https://versus-card-app.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="carousel-item absolute rounded-xl shadow-2xl border-2 border-white/20 cursor-pointer hover:scale-110 transition-transform duration-300 block overflow-hidden" 
                style={{animationDelay: '-3.4s'}}
              >
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/sitio_03.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </a>
              
              {/* Video 4 - sitio_04.MP4 */}
              <a 
                href="https://vegalfredo.github.io/Leyendas_Bernal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="carousel-item absolute rounded-xl shadow-2xl border-2 border-white/20 cursor-pointer hover:scale-110 transition-transform duration-300 block overflow-hidden" 
                style={{animationDelay: '-5.1s'}}
              >
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/sitio_04.MP4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </a>
              
              {/* Video 5 - sitio_05 */}
              <a 
                href="https://vegalfredo.github.io/MDEI/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="carousel-item absolute rounded-xl shadow-2xl border-2 border-white/20 cursor-pointer hover:scale-110 transition-transform duration-300 block overflow-hidden" 
                style={{animationDelay: '-6.8s'}}
              >
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/sitio_05.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </a>
              
                             {/* Video 6 - sitio_06.mp4 */}
               <a 
                 href="https://vegalfredo.github.io/consultorio-dental-plantilla/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="carousel-item absolute rounded-xl shadow-2xl border-2 border-white/20 cursor-pointer hover:scale-110 transition-transform duration-300 block overflow-hidden" 
                 style={{animationDelay: '-8.5s'}}
               >
                 <video 
                   className="w-full h-full object-cover"
                   autoPlay 
                   loop 
                   muted 
                   playsInline
                 >
                   <source src="/sitio_06.mp4" type="video/mp4" />
                   Tu navegador no soporta el elemento de video.
                 </video>
               </a>
              
              {/* Placeholder 7 - Video sitio_07.mp4 */}
              <a 
                href="https://vegalfredo.github.io/Curso-de-Verano-ZEFFATA/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="carousel-item absolute bg-gradient-to-b from-rose-600 to-pink-600 rounded-xl shadow-2xl border-2 border-white/20 text-center flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 block" 
                style={{animationDelay: '-10.2s'}}
              >
                <div className="text-white font-bold text-sm">sitio_07.mp4</div>
              </a>
            </div>
            
            {/* Separador con espacio específico */}
            <div className="h-[50px]"></div>
            
            {/* Título del carrusel */}
            <div className="text-center">
              <h3 className="text-white font-semibold text-xl mb-2">Nuestros Proyectos</h3>
              <p className="text-white/60 text-sm">Sitios web que hemos desarrollado</p>
            </div>
          </div>
        </div>



          {/* Sección Quienes Somos */}
          <section id="quienes-somos" className="mt-32 py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Quienes Somos
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white leading-tight">
                  Somos expertos en crear 
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> sitios web </span> 
                  que convierten
                </h3>
                <p className="text-xl text-white/80 leading-relaxed">
                  En The Moon Drakon, transformamos ideas en experiencias digitales que venden. 
                  Nuestros sitios web no solo se ven increíbles, sino que están diseñados para 
                  generar resultados reales para tu negocio.
                </p>
                                 <div className="grid grid-cols-2 gap-6 pt-6">
                   <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                     <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                     <div className="text-white/70 text-sm">Responsivo</div>
                   </div>
                   <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                     <div className="text-3xl font-bold text-purple-400 mb-2">Profesional</div>
                     <div className="text-white/70 text-sm">Diseño moderno</div>
                   </div>
                 </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🚀</div>
                    <p className="text-white/80 text-lg">Innovación Digital</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </section>

          {/* Sección Paquetes */}
          <section id="paquetes" className="mt-32 py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                  Nuestros Paquetes
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {/* Paquete Básico */}
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">🌱</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Paquete Básico</h3>
                    <div className="text-3xl font-bold text-green-400 mb-2">$3,500</div>
                    <p className="text-white/70 text-sm">Perfecto para empezar</p>
                  </div>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Sitio web responsivo
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Hasta 5 páginas
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      Formulario de contacto
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      SEO básico
                    </li>
                  </ul>
                  
                  {/* Botón de WhatsApp para Paquete Básico */}
                  <div className="text-center mt-6">
                    <a 
                      href="https://wa.me/524425713606?text=Hola%2C%20me%20interesa%20mucho%20el%20Paquete%20Básico%20de%20$3%2C500.%20Me%20gustaría%20que%20me%20cuentes%20más%20detalles%20y%20empezar%20con%20mi%20sitio%20web%20responsivo." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 transform hover:-translate-y-1 inline-flex items-center space-x-2 w-full justify-center"
                    >
                      <div className="text-xl">💬</div>
                      <span>Contratar Básico</span>
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Paquete Profesional */}
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">⭐</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Paquete Profesional</h3>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">$6,000</div>
                    <p className="text-white/70 text-sm">Para negocios en crecimiento</p>
                  </div>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">✓</span>
                      Todo del paquete básico
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">✓</span>
                      Hasta 10 páginas
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">✓</span>
                      Blog integrado
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">✓</span>
                      Analytics avanzado
                    </li>
                    <li className="flex items-center">
                      <span className="text-yellow-400 mr-2">✓</span>
                      Integración con redes sociales
                    </li>
                  </ul>
                  
                  {/* Botón de WhatsApp para Paquete Profesional */}
                  <div className="text-center mt-6">
                    <a 
                      href="https://wa.me/524425713606?text=Hola%2C%20estoy%20muy%20interesado%20en%20el%20Paquete%20Profesional%20de%20$6%2C000.%20Necesito%20un%20sitio%20web%20más%20completo%20con%20blog%20y%20analytics%20para%20mi%20negocio%20en%20crecimiento." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 transform hover:-translate-y-1 inline-flex items-center space-x-2 w-full justify-center"
                    >
                      <div className="text-xl">💬</div>
                      <span>Contratar Profesional</span>
                      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Paquete Premium */}
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">🔥</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Paquete Premium</h3>
                    <div className="text-3xl font-bold text-orange-400 mb-2">$12,000</div>
                    <p className="text-white/70 text-sm">Para empresas establecidas</p>
                  </div>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-2">✓</span>
                      Todo del paquete profesional
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-2">✓</span>
                      E-commerce completo
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-2">✓</span>
                      Panel de administración
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-2">✓</span>
                      Integración con CRM
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-400 mr-2">✓</span>
                      Soporte prioritario 24/7
                    </li>
                  </ul>
                  
                  {/* Botón de WhatsApp para Paquete Premium */}
                  <div className="text-center mt-6">
                    <a 
                      href="https://wa.me/524425713606?text=Hola%2C%20me%20interesa%20el%20Paquete%20Premium%20de%20$12%2C000.%20Necesito%20una%20solución%20completa%20con%20e-commerce%2C%20CRM%20y%20soporte%20prioritario%20para%20mi%20empresa%20establecida." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 inline-flex items-center space-x-2 w-full justify-center"
                    >
                      <div className="text-xl">💬</div>
                      <span>Contratar Premium</span>
                      <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Paquete Personalizado */}
              <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Paquete Personalizado</h3>
                    <div className="text-3xl font-bold text-purple-400 mb-2">Cotización</div>
                    <p className="text-white/70 text-sm">Adaptado a tus necesidades</p>
                  </div>
                  <ul className="space-y-3 text-white/80 mb-6">
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      Análisis personalizado
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      Funcionalidades únicas
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      Integraciones especiales
                    </li>
                    <li className="flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      Soporte dedicado
                    </li>
                  </ul>
                  
                  {/* Botón de WhatsApp para Paquete Personalizado */}
                  <div className="text-center">
                    <a 
                      href="https://wa.me/524425713606?text=Hola%2C%20estoy%20interesado%20en%20un%20paquete%20personalizado%20para%20mi%20sitio%20web.%20Me%20gustaría%20que%20me%20cuentes%20más%20sobre%20cómo%20se%20adaptan%20a%20mis%20necesidades%20específicas." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1 inline-flex items-center space-x-2 w-full justify-center"
                    >
                      <div className="text-xl">💬</div>
                      <span>Cotizar Personalizado</span>
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sección Contacto */}
          <section id="contacto" className="mt-32 py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
                  Contacto
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-orange-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Información de Contacto */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">¡Hablemos de tu proyecto!</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      Estamos listos para transformar tu visión en una realidad digital que venda. 
                      Cuéntanos sobre tu proyecto y te daremos una propuesta personalizada.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                      <div className="text-2xl">📧</div>
                      <div>
                        <div className="text-white font-semibold">Email</div>
                        <a href="mailto:contacto@themoondrakon.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          contacto@themoondrakon.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                      <div className="text-2xl">🌍</div>
                      <div>
                        <div className="text-white font-semibold">Ubicación</div>
                        <div className="text-white/80">México</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Botón de WhatsApp */}
                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-2">¿Listo para empezar?</h4>
                    <p className="text-white/70">Chatea con nosotros en WhatsApp</p>
                  </div>
                  
                  <a 
                    href="https://wa.me/524425713606?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20de%20sitios%20web%2C%20quisiera%20una%20cotización" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50 transform hover:-translate-y-2 inline-flex items-center space-x-3"
                  >
                    <div className="text-3xl">💬</div>
                    <span className="text-lg">Chatear en WhatsApp</span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  </a>
                  
                  <div className="text-center text-white/60 text-sm">
                    <p>Responde en minutos</p>
                    <p>+52 442 571 3606</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    </div>
  );
};

export default Hero;