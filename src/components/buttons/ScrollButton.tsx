'use client';
import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';

import '@/components/buttons/styles32.css'

export const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false); // Controla visibilidad por scroll
    const [isClicked, setIsClicked] = useState(false); // Controla animación al hacer clic
    const [isDisappearing, setIsDisappearing] = useState(false); // Controla la animación de desaparición cuando el scroll < 300
  
    // Mostrar el botón solo cuando se ha hecho scroll
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
          setIsDisappearing(false);
        } else {
          if (isVisible) {
            setIsDisappearing(true); // Inicia la animación de desaparición si se ha hecho scroll < 300
            setTimeout(() => {
              setIsVisible(false); // Esconde el botón después de la animación de salida
            }, 300); // Duración de la animación de salida
          }
        }
      };
  
      window.addEventListener('scroll', toggleVisibility);
  
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, [isVisible]);
  
    // Función para hacer scroll hasta arriba
    const scrollToTop = () => {
      setIsClicked(true); // Inicia la animación de clic
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Animación suave al hacer scroll
        });
        setTimeout(() => {
        }, 300); // Duración de la animación de salida tras el clic
      }, 300); // Tiempo suficiente para la animación de salida
    };

return (
        <div>
            {isVisible && (
                <button
                onClick={scrollToTop}
                className={`fixed bottom-24 right-10 z-50 bg-pink-500 text-white rounded-full p-3 shadow-lg transition-transform duration-300 
                  ${isClicked ? 'animate-clickOut' : isDisappearing ? 'animate-fadeOutDown' : 'animate-fadeInUp'}`}
              >
                    <MdOutlineKeyboardDoubleArrowUp size={26} />
                </button>
            )}
        </div>
    );
}
