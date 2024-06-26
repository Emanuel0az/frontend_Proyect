export const login = async (correo,clave) => {
    try {
        const response = await fetch("http://localhost:3001/usuarios", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            
        });
        if (!response.ok) {
            throw new Error('Credenciales incorrectas');
        }
        const data = await response.json();
        return data; // Se espera que la API devuelva un token de autenticación o información del usuario
    } catch (error) {
        console.error(error);
        alert('Error en el inicio de sesión: ' + error.message);
    }
};