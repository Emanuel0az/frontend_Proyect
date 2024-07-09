export const remove_product = async (id) => {
    try {
      const response = await fetch(`http://localhost:3002/productos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al eliminar el recurso');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error al eliminar el producto', error);
      throw new Error('Error al eliminar el recurso');
    }
  };
  

  