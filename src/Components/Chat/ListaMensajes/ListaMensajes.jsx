import React, { useEffect } from 'react'
import './listamensajes.css'
import { Mensaje } from '../Mensaje/Mensaje'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export const ListaMensajes = ({mensajesChat}) => {
 console.log(mensajesChat)
  const { contactId } = useParams();
  const [mensaje, setMensaje] = useState([]);


  

  return (
    <div className='lista_mensaje'>
      {mensajesChat.map((mensaje, index) =>
        <Mensaje mensaje={mensaje} key={`${contactId}.${mensaje.id}.${index}`} />
      )}
    </div>
  )
}
