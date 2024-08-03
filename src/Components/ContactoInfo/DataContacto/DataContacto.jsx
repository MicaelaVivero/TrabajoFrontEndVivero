import React from 'react'
import { obtenerContactos } from '../../../Fetching/FetchContactos'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './DataContacto.css'

const DataContacto = () => {

  const { contactId } = useParams()
  const [contacto, setContactos] = useState([])

  useEffect(
    () => {
      obtenerContactos()
        .then(
          (data) => {
            const contacto = data.find(contacto => contacto.id === Number(contactId))
            setContactos(contacto)

          })
        .catch((error) => {
          console.error('Error al obtener contactos:', error);
        })
    }, [])


  return (
    <div className='contenedor_contactos'>
      <div className='info_principal'>
        <img src={contacto.thumbnail} alt="" />
        <h1>{contacto.nombre}</h1>
        <p>{contacto.telefono}</p>
        <div className='contenedor_interaccion'>
          <div className='interaccion_contacto'>
            <i class="bi bi-telephone"></i>
            <p>Llamar</p>
          </div>
          <div className='interaccion_contacto'>
            <i class="bi bi-camera-video"></i>
            <p>Video</p>
          </div>
          <div className='interaccion_contacto'>
            <i class="bi bi-search"></i>
            <p>Buscar</p>
          </div>
        </div>
        <div className='contacto_estado'>
          <p> Estado: {contacto.ultima_conexion}</p>
        </div>
        </div>
      <div className='contenedor_botones'>
        <div className='contenedor_divs'>
          <div className='div1'>
            <div className='div1_titulo'>
              <i class="bi bi-card-image"></i>
              <p>Archivos, enlaces y docs</p>
            </div>
            <i class="bi bi-arrow-right-short"></i>
          </div>
          <hr />
          <div className='div1'>
            <div className='div1_titulo'>
              <i class="bi bi-star"></i>
              <p>Mensajes Destacados</p>
            </div>
            <i class="bi bi-arrow-right-short"></i>
          </div>
        </div>

        <div className='contenedor_divs'>
          <div className='div1'>
            <div className='div1_titulo'>
              <i class="bi bi-bell"></i>
              <p>Notificaciones</p>
            </div>
            <i class="bi bi-arrow-right-short"></i>
          </div>
          <hr />
          <div className='div1'>
            <div className='div1_titulo'>
              <i class="bi bi-brilliance"></i>
              <p>Fondo</p>
            </div>
            <i class="bi bi-arrow-right-short"></i>
          </div>
          <hr />
          <div className='div1'>
            <div className='div1_titulo'>
              <i class="bi bi-download"></i>
              <p>Guardar en Fotos</p>
            </div>
            <i class="bi bi-arrow-right-short"></i>
          </div>
        </div>
        <div className='info_contacto'>
          <div className='div1_titulo'>
          <i class="bi bi-person-circle"></i>
            <p>Info de Contacto</p>
          </div>
          <i class="bi bi-arrow-right-short"></i>
        </div>
      </div>
    </div>
  )
}

export default DataContacto
/*<i class="bi bi-person-circle"></i>*/