import { Link, useNavigate } from "react-router-dom"
import { login } from "../services/getAPI"
import { useState } from "react";
import './login.css'

function formlogin() {
  const [email, setEmail] = useState('');//variable declarada que tiene el valor del input
  const [password, setPassword] = useState('');//variable declarada que tiene el valor del input
  const [errors, setErrors] = useState({});//variable declarada que tiene el valor del input

  const validate = () => {
    let inputErrors = {};
    if (!email) inputErrors.email = '';//valida si no hay nada escrito y envia un mensaje
    if (!password) inputErrors.password = '';//valida si no hay nada escrito y envia un mensaje
    return inputErrors;
  };
  
  const navigate = useNavigate() //uso del useNavigate
  const handleSubmit = async (event) => { // evento tipo submit al boton del login
    event.preventDefault();
    const inputErrors = validate(); // llama a la funcion que valida los espacios vacios
    
    if (Object.keys(inputErrors).length === 0) { //valida que no haya errores en las anteriores validaciones para ejecutar lo siguiente

      const result = await login(email,password) //variable que espera al llamado de la api
      const user = result.find(user => user.correo === email && user.clave === password); // validacion para encontrar al usuario 
      
      if (user) { // validacion para alertas y links
        localStorage.setItem ('UserId',user.id)
        console.log('Formulario enviado', { email, password }); // mensaje en la consola 
        alert('Login Exitoso'); // alerta de inicio de sesion exitoso
        navigate('/dashboard'); // metodo que redirige a otra pagina una vez echo el login
      }
    
      
    } else {
        setErrors(inputErrors); // si hay un error lo muestra en pantalla o en consola
        alert('Ingrese datos')
    }
  };

 







  return (
    <div>
            <h2>Inicio de Sesión</h2>
            <div className="login_css">
            <form onSubmit={handleSubmit}>
                <div>
                    <label><strong>Correo electrónico</strong></label><br />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Ingrese su Correo'
                    />
                    <br />
                    <br />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label><strong>Contraseña</strong></label><br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Ingrese su Contraseña'
                    />
                    <br />
                    <br />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <button type="submit">Iniciar Sesión</button>
                <br />
                <br />
                <button><Link to='/register'>Ir al registro</Link></button>
            </form>
            </div>
        </div>
  )
}

// export {ruta}
export default formlogin
