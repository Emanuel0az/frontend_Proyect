import Navbar_home  from "../components/NavbarCom/navbar"
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/card/card'




const Home = () => {
  const [buscador, setBuscador] = useState('');

  return (
    <div>
        
        <Navbar_home onSearch={setBuscador} />
      <Card buscador={buscador} />
        
    </div>
  )
}

export default Home