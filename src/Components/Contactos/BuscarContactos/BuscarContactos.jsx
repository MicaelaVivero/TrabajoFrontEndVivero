import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { obtenerContactos } from '../../../Fetching/FetchContactos';
import './BuscarContacto.css'

const BuscarContactos = () => {
    const [listaContactos, setListaContactos] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            obtenerContactos()
                .then((contactos) => {
                    if (search) {
                        const nuevaListaContactos = contactos.filter(
                            contacto =>
                                contacto.nombre.toLowerCase().includes(search.toLowerCase())
                        );
                        setListaContactos(nuevaListaContactos);
                    } else {
                        setListaContactos(contactos);
                    }
                    setIsLoading(false);
                });
        }, 1000);
    }, [search]);

    return (
        <div className='buscarcontacto_input'>
            <input
                type="text"
                placeholder='Buscar Contactos...'
                value={search}
                onChange={handleChange}
            />
            <div>
                {isLoading ? (
                    <h2>Cargando...</h2>
                ) : (
                    listaContactos.map(contacto => {
                        const { id, thumbnail, nombre, mensajes } = contacto; // Asegúrate de que estos nombres coincidan con los de tus datos
                        return (
                            <Link key={id} className='contenedor' to={`/chat/${id}`}>
                                <div className="contacto-item">
                                    <div className='datos_contacto'>
                                        <img src={thumbnail} alt={nombre} />
                                        <div className="data_contacto">
                                            <h2 className="nombre"><strong>{nombre}</strong></h2>
                                            <p>{mensajes[0]?.text || ''}</p>
                                        </div>
                                    </div>
                                    <div className="hora">{mensajes[0]?.hour || ''}</div>
                                </div>
                            </Link>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default BuscarContactos;
