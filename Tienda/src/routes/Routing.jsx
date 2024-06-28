import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Login from '../pages/page_Login'
import  Home  from "../pages/home"
import Register from '../pages/page_Resgister'
import About from '../pages/about/about'
import Contacto from '../components/contacto/contacto'
import Admin from '../ADMIN/pages/admin'
import { PrivateRoutes } from "./privateRoute"

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
              <Route path="/admin" element={
                      <PrivateRoutes>
                        <Admin />

                      </PrivateRoutes>
                     } />


            </Routes>
        </Router>
      
    </div>
  )
}

export default routing
