import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/Footer.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h3>Job search App</h3>
            <p>Bogotá - Colombia</p>
            <p>Línea nacional gratuita 01 8000 0000</p>
            <p>Job.search@gmail.com</p>
          </div>
          <div className='footer-link-items'>
            <h3>Profesional</h3>
            <Link to=''>Registro</Link>
            <Link to=''>Buscar Empleo</Link>
            <Link to=''>Empresas</Link>
            <Link to=''>Convocatorias</Link>
          </div>
          <div className='footer-link-items'>
            <h3>Empresas</h3>
            <Link to=''>Registro</Link>
            <Link to=''>Publicar Oferta</Link>
          </div>
          <div className='footer-link-items'>
            <h3>Siguenos</h3>
            <Link to=''>Instagram</Link>
            <Link to=''>Facebook</Link>
            <Link to=''>Link</Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
