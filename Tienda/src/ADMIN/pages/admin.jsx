import Navbar_home  from "/Users/Dell/Desktop/frontend_Proyect/Tienda/src/components/NavbarCom/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../../components/card/card'
import React from 'react'
import Filter from "../../components/SectionFilter/filter";
// import DarkVariantExample from '../../components/carrousel/carrousel'
const admin = () => {

  
  return (
    <div>
        <h1>Productos</h1>
        {/* <DarkVariantExample /> */}
        <Filter/>
        <Navbar_home/>
        
    </div>
  )
}

export default admin