import Navbar_home  from "../components/NavbarCom/navbar"
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/card/card'
import DarkVariantExample from "../components/carrousel/carrousel";




const Home = () => {
  const [buscador, setBuscador] = useState('');

  return (
    <div>
        <Navbar_home onSearch={setBuscador} />


          <h2></h2>
          <DarkVariantExample/>
          <div className="contenido">
            <h3 className="title-card">Productos</h3>
      <Card buscador={buscador} />
       </div>
    </div>
  )
}

export default Home