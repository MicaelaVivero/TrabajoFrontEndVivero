import React from 'react'
import './App'
import {Route, Routes } from 'react-router-dom'
import { ChatScreen } from './screens'
import { ContactoScreen } from './screens'
import InfoContacto from './screens/InfoContacto/InfoContacto'




function App() {
  
  return (
      <Routes>
            <Route path='/' element={<ContactoScreen/>}/>
            <Route path='chat/:contactId' element={<ChatScreen/>}/>
            <Route path='contactoInfo/:contactId' element={<InfoContacto/>}/>
              
      </Routes>
  )
}
export default App
