import React from 'react'
import { Link } from 'react-router-dom'
import './Contacto.css'


const Contacto = ({ contactochat }) => {
    const { nombre, thumbnail, ultima_conexion, id, mensajes } = contactochat

    return (
        <>
        <Link className='contenedor' to={`/chat/${id}`}> 
            <div key={id} className="contacto-item">
                <div className='datos_contacto'>
                <img src={thumbnail} alt={nombre} />
                <div className="data_contacto">
                    <h2 className="nombre"><strong>{nombre}</strong></h2>
                    <p className="">{mensajes[0].text}</p>
                </div>
                </div>
                <div className="hora">{mensajes[0].hour}</div>
            </div>
        </Link>
        <hr />
        </>

    )
}




export default Contacto
