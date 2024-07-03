export const login = async (correo,clave) => {
    try {
        const response = await fetch("http://localhost:3002/usuarios", {
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

export const add_products = async () => {
    try {
        const response = await fetch("http://localhost:3002/productos", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!response.ok) {
            throw new Error('Error al obtener los productos');
        }
        const data = await response.json();
        return data; // Asegúrate de que la API devuelva una lista de productos
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return []; // Devuelve un array vacío en caso de error
    }
};
