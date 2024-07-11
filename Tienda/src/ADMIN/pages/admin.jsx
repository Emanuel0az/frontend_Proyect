import Navbar_home  from "/Users/AMD/Desktop/frontend_Proyect/Tienda/src/components/NavbarCom/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../../components/card/card'
import React, { useState } from 'react'


const admin = () => {
  const [buscador, setBuscador] = useState('');


  return (
    <div>
    
        <Navbar_home onSearch={setBuscador} />
      <Card buscador={buscador} />

    </div>
  )
}

export default admin