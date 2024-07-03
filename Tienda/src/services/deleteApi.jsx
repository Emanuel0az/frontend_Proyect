export async function remove_product(id) {
    const apiUrl = `http://localhost:3002/productos/${id}`;
  
    try {
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al eliminar el recurso');
      }
  
      const data = await response.json(); // Si la API devuelve JSON
      console.log('Recurso eliminado con éxito:', data);
    } catch (error) {
      console.error('Hubo un problema al eliminar el recurso:', error);
    }
  }
  
