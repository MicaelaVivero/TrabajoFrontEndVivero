import React from 'react'
import './HeaderContacto.css'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { obtenerContactos } from '../../../Fetching/FetchContactos'


const HeaderContacto = () => {

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
    <div className='footer_header_contacto'>
        <Link to={`/chat/${contacto.id}`}><div className='arrow'><i className="bi bi-arrow-left"></i></div></Link>
        <h2>Contact Info</h2>
        <button>Editar</button>
    </div>
  )
}

export default HeaderContacto