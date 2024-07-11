import Routing from './routes/Routing'
import Navbar_home  from "./components/NavbarCom/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer';


function App() {


  return (
    <>
      <div>
      <Navbar_home/>

       <Routing />

      <Footer/>
      </div>
    
    </>
  )
}

export default App
