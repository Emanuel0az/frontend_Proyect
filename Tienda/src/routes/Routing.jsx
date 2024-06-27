import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Login from '../pages/page_Login'
import  Home  from "../pages/home"
import Register from '../pages/page_Resgister'
import About from '../pages/about/about'
import Contacto from '../pages/contacto/contacto'
function routing() {
  return (
    <div>

        <Router>
            <Routes>
              <Route path='/' element={<Home/>}   />
              <Route path='/home' element={<Home/>}   />
              <Route path='/register' element={<Register/>}   />
              <Route path='/login' element={<Login/>}   />
              <Route path='/about' element={<About/>}   />
              <Route path='/contacto' element={<Contacto/>}   />


            </Routes>
        </Router>
      
    </div>
  )
}

export default routing
