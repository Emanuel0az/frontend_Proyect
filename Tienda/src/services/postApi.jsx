export const addPost = async (gorra, marca, precio) => {
    try {
        const response = await fetch("http://localhost:3002/productos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                item: gorra,
                tipo: marca,
                cantidad: precio
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        alert('Ha ocurrido un error en el post');
    }
};

export const addUsers = async (username, email, password) => {
    try {
        const response = await fetch("http://localhost:3002/usuarios", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: username,
                correo: email,
                clave: password
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        alert('Ha ocurrido un error en el post');
    }
};
