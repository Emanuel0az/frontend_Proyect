import Navbar_home  from "../components/NavbarCom/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/card/card'

import React from 'react'

const Home = () => {
  return (
    <div>
        <Card/>
        <Navbar_home/>
        <h1>Home</h1>
    </div>
  )
}

export default Home