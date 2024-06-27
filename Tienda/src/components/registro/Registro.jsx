import {useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { addPost } from "../../services/postApi"
import './registro.css'

function Formregistro() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  
  // valida espacios vacios en los inputs y pone un mensaje
  const validate = () => {
      let inputErrors = {};
      if (!username) inputErrors.username = '';
      if (!email) inputErrors.email = '';
      if (!password) inputErrors.password = '';
      return inputErrors;
  };
  let userAutenticated = false
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputErrors = validate();
    if (Object.keys(inputErrors).length === 0) {

      const result = await addPost(username,email,password)
      if (result) {
      alert ('Registro Exitoso')
      userAutenticated = true
      if (userAutenticated === true) {
        navigate('/login')
      }
      
      }
      
    } else {
        setErrors(inputErrors);
        alert ('Ingrese datos')
    }
  };















  return (
  <div>
    <h2>Registro</h2>
    <div className="registro_css">
    <form onSubmit={handleSubmit}>
        <div>
            <label><strong>Nombre de usuario</strong></label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Ingrese su Usuario'

            />
            {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
            <label> <strong>Correo electrónico</strong></label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Ingrese su Correo'

            />
            {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
            <label><strong>Contraseña</strong></label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Ingrese su Contraseña'

            /> <br />
            {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit" >Registrarse</button>
       <br />
       <br />
       <button><Link to='/login'>Ir al login</Link></button>
    </form>
    </div>
  </div>
  )
}



export default Formregistro
