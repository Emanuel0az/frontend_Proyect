export async function updateProduct(id) {
    try {
        const response = await fetch(`http://localhost:3002/productos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error('Error al actualizar la tarea:', response.status);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}