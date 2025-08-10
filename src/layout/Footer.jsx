import React from 'react'

export const Footer = () => {
    // obtener el año actual
    const anioActual = new Date().getFullYear();
  return (
    <footer className='footer'>
      Portafolio Mark Castro - {anioActual}
    </footer>
  )
}
