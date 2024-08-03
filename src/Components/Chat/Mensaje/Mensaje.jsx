import React from 'react'
import { useParams } from "react-router-dom";
import { obtenerContactos } from '../../../Fetching/FetchContactos';
import './mensaje.css'

export const Mensaje = ({ mensaje }) => {
    const { author, text, estado, day, hour, id } = mensaje

    return (
        <div className={`mensaje ${author}`} key={id}>
            <div className='burbuja'>
                <div className='info_persona'>
                    <div className='contacto_persona'><strong>{author}</strong></div>
                    <div className='texto'>{text}</div>
                </div>
                <div className='datos_mensaje'>
                    <div className="day-hour">
                        <div className='day fonts'>{day}</div>
                        <div className='hour fonts'>{hour}</div>
                    </div>
                    <div className={author + "state-box"}>
                        <span>{ValidacionVisto(estado)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ValidacionVisto = (estado) => {
    if (estado === 'visto') {
        const state = <i className="bi bi-check2-all state"></i>
        return state
    }
    else if (estado === 'no recibido') {
        const state = <i className="bi bi-check2 state-negative"></i>
        return state
    }
}
