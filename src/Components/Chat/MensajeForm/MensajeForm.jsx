import React, { useState } from 'react'
import './MensajeForm.css'



export const MensajeForm = ({ handleNuevoMensaje }) => {
    const [value, setValue] = useState(' ')

    const handleChange = (event) => {
        setValue(event.target.value);
      };  

      const handleNuevoMensajeNew = (e) => {
        e.preventDefault()
        handleNuevoMensaje(value);
        setValue(" ");  
      };
      
      
      
      
    
/* cuando el usuario escribe por ejemplo hola, el onChange lo captura y se produce
una funcion (handleChange), la cual es aquella q permite que el value se modifique al
setValue.*/

    return (   /*onSubmit={NuevoMensaje}*/
        <form className='message-section'   onSubmit={handleNuevoMensajeNew} >
            <button className='icon_input'><i class="bi bi-plus"></i></button>
            <input type="text" className='message-input' placeholder="Type a message..." onChange={handleChange} value={value}/>
                {
                    value.trim() === ''
                        ? 
                        <div className='cam_mic'>
                            <button className='icon_input'><i class="bi bi-camera"></i></button> 
                            <button className='icon_input'><i class="bi bi-mic-fill" id='mic'></i></button>
                            
                        </div>
                        :
                        (<button className='icon_input' type='submit'><i class="bi bi-send"></i></button>)
                }
        </form>
        )
}
