import React from 'react'
import DataContacto from '../../Components/ContactoInfo/DataContacto/DataContacto'
import HeaderContacto from '../../Components/ContactoInfo/HeaderContacto/HeaderContacto'
import './InfoContacto.css'
const InfoContacto = () => {
  return (
    <div className='infocontacto_styles'>
        <HeaderContacto/>
        <DataContacto/>
    </div>
  )
}



export default InfoContacto