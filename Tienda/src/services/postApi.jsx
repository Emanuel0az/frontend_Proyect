export const addPost = async (imagen, nombre, precio) => {
    try {
      const response = await fetch('http://localhost:3002/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imagen, nombre, precio }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return null;
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
