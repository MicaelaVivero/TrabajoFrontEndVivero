import React from 'react'
import './ChatHeaderInfo.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { obtenerContactos } from '../../../Fetching/FetchContactos'

export const ChatHeaderInfo = () => {
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
    <div className='info_header'>
      <div className='info_contactoheader'>
        <Link to={`/`}><div className='arrow'><i className="bi bi-arrow-left"></i></div></Link>
        <Link className='contenedorheaderchat' to={`/contactoInfo/${contacto.id}`}> 
          <div className='img_contacto'><img src={contacto.thumbnail} alt="" /></div>
          <div className='contacto'>{contacto.nombre}</div>
        </Link>
      </div>
      <div className='secundary_icons'>
        <div><i className="bi bi-camera-video"></i></div>
        <div><i className="bi bi-telephone"></i></div>
      </div>
    </div>
  )
}
