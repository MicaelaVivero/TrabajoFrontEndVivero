import React from 'react'
import './HeaderContacto.css'
import BuscarContactos from '../BuscarContactos/BuscarContactos'

const HeaderContactos = () => {
  
  return (
    <div className='contenedor_header_contacto'>
      <div className='header_chat'>
        <i class="bi bi-three-dots"></i>
        <div className='icons_chatscreen'>
          <i class="bi bi-search"></i>
          <i class="bi bi-plus-circle-fill"></i>
        </div>
      </div>
    </div>
  )
}

export default HeaderContactos