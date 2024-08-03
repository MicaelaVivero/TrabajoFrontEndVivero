import React from 'react'
import './FooterContactos.css'

const FooterContactos = () => {
    return (
        <div className='contenedor_footer'>
            <div className='icons_principales'>
            <div className='sections'>
                <button className='icon_footer'><i class="bi bi-camera"></i></button>
                <p>Camara</p>
            </div>
            <div className='sections'>
                <button className='icon_footer'><i class="bi bi-chat-dots"></i></button>
                <p>Chats</p>
            </div>
            <div className='sections'>
                <button className='icon_footer'><i class="bi bi-record-circle"></i></button>
                <p>Estados</p>
            </div>
            <div className='sections'>
                <button className='icon_footer'><i class="bi bi-telephone"></i></button>
                <p>Llamadas</p>
            </div>
            </div>
                <div className='sections'>
                    <button className='icon_footer'><i class="bi bi-gear"></i></button>
                    <p>Ajustes</p>
                </div>
        </div>
    )
}

export default FooterContactos