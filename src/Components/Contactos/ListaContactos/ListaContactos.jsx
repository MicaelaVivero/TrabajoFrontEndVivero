import React, { useEffect, useState } from 'react'
import Contacto from '../Contacto/Contacto'
import './ListaContactos.css'
import { obtenerContactos } from '../../../Fetching/FetchContactos'
import BuscarContactos from '../BuscarContactos/BuscarContactos'


export const ListaContactos = () => {
    const [contactos, setContactos] = useState([])

    useEffect(
        () => {
            obtenerContactos()
                .then(
                    (contactos) => {
                        setContactos(contactos)

                    })
    .catch((error) => {
            console.error('Error al obtener contactos:', error);
        })
    }, [])


    return (
        <div className='lista_contacto'>
            <h1> Chats</h1>
            <BuscarContactos/>
        </div>

    )
}

