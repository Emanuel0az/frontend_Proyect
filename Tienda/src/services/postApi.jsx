export const addPost = async (username, email, password) => {
    try {
        const response = await fetch("http://localhost:3001/usuarios", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: username,
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
