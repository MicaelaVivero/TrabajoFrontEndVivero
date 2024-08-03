import React, { useState, useEffect } from 'react';
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../../Components/Chat';
import './ChatScreen.css';
import { useParams } from 'react-router-dom';
import FooterContactos from '../../Components/Contactos/FooterContactos/FooterContactos';

const fetchMensajes = async (data, contactId) => {
    const contacto = data.find(contacto => contacto.id === parseInt(contactId, 10));
    return contacto ? contacto.mensajes : [];
};

const postNuevoMensaje = async (contactId, nuevoMensaje) => {
    const response = await fetch('/data.json');
    const data = await response.json();

    const contactoIndex = data.findIndex(contacto => contacto.id === parseInt(contactId, 10));
    if (contactoIndex !== -1) {
        data[contactoIndex].mensajes = [
            ...data[contactoIndex].mensajes,
            nuevoMensaje
        ];
    }
    
    return new Promise((resolve) => setTimeout(resolve, 500));
};

export const ChatScreen = () => {
    const { contactId } = useParams();
    const [mensajesChat, setMensajesChat] = useState([]);
    const [loading, setLoading] = useState(true);
    const [contactoNombre, setContactoNombre] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch('/data.json');
            const data = await response.json();
            const contacto = data.find(contacto => contacto.id === parseInt(contactId, 10));
            if (contacto) {
                setContactoNombre(contacto.nombre);
                const mensajes = contacto.mensajes;
                setMensajesChat(mensajes);
            }
            setLoading(false);
        };

        fetchData();
    }, [contactId]);


    const handleNuevoMsj = async (textoMensaje) => {
        const nuevoMensaje = {
            author: 'yo',
            text: textoMensaje,
            estado: 'entregado',
            day: 'hoy',
            hour: new Date().toLocaleTimeString(),
            id: mensajesChat.length + 1
        };

        setMensajesChat([...mensajesChat, nuevoMensaje]);
        await postNuevoMensaje(contactId, nuevoMensaje);
    };

    if (loading) {
        return <div>Cargando mensajes...</div>;
    }

    if (!mensajesChat.length) {
        return <div>No hay mensajes para este contacto</div>;
    }

    return (
        <div className='contacto_screen'>
            <div className='footer_visible'>
                <FooterContactos />
            </div>
            <div className=''>
                <div className='chat'>
                    <ChatHeaderInfo author={contactoNombre} />
                    <ListaMensajes mensajesChat={mensajesChat} />
                    <MensajeForm handleNuevoMensaje={handleNuevoMsj} />
                </div>
            </div>
        </div>
    );
};
