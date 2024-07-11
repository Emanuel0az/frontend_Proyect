import Button from 'react-bootstrap/Button'; // Importa el componente de botón de la librería React-Bootstrap
import Card from 'react-bootstrap/Card'; // Importa el componente de tarjeta de la librería React-Bootstrap
import React, { useState, useEffect, useCallback } from 'react'; // Importa funciones de React para manejar el estado y efectos secundarios
import { add_products } from '../../services/getApi'; // Importa la función para obtener productos
import './card.css'; // Importa estilos personalizados para las tarjetas
import { remove_product } from '../../services/deleteApi'; // Importa la función para eliminar productos
import { updateProduct } from '../../services/updateApi'; // Importa la función para actualizar productos
import swal from 'sweetalert'; // Importa la librería para mostrar alertas bonitas

// Define un componente llamado CardComponent que recibe un prop llamada 'buscador'
function CardComponent({ buscador }) {
  // Define varios estados para manejar datos y la interfaz
  const [boton, setBoton] = useState('none'); // Estado para mostrar u ocultar botones de edición
  const [products, setProducts] = useState([]); // Estado para almacenar la lista de productos
  const [search, setSearch] = useState([]); // Estado para almacenar la lista de productos filtrados por búsqueda
  const [nombre, setNombre] = useState(''); // Estado para almacenar el nombre del producto a editar
  const [clase, setClase] = useState(''); // Estado para almacenar la clase del producto a editar
  const [precio, setPrecio] = useState(''); // Estado para almacenar el precio del producto a editar
  const [editId, setEditId] = useState(null); // Estado para almacenar el ID del producto que se está editando

  //se ejecuta al cargar el componente para mostrar los botones de edición si el usuario es admin
  useEffect(() => {
    if (localStorage.getItem('Admin_ID') === 'ADMIN') {
      setBoton('block');
    } else {
      setBoton('none');
    }
  }, []);

  const estado = 'EDITOR'; // Define una constante para indicar el estado de edición

  // Función para preparar la edición de un producto
  const edit_Put = (producto) => {
    localStorage.setItem('Edicion', estado);
    if (localStorage.getItem('Edicion') === 'EDITOR') {
      setNombre(producto.nombre);
      setClase(producto.clase);
      setPrecio(producto.precio);
      setEditId(producto.id);
    }
  };

  // Función para guardar los cambios de un producto editado
  const guardar = async (id, imagen) => {
    try {
      await updateProduct(id, nombre, clase, precio, imagen);
      setProducts(products.map(product =>
        product.id === editId
          ? { ...product, nombre, clase, precio }
          : product
      ));
      setEditId(null);
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  // Función para confirmar la actualización de un producto con una alerta
  const confirmarActualizar = async (id, imagen) => {
    swal({
      title: 'Actualizar',
      text: '¿Está seguro de que desea actualizar este producto?',
      icon: 'warning',
      buttons: ['No', 'Sí'],
    }).then(async (respuesta) => {
      if (respuesta) {
        await guardar(id, imagen);
        swal({
          text: 'El producto ha sido actualizado',
          icon: 'success',
          timer: 8000,
        });
      }
    });
  };

  // Función para confirmar la eliminación de un producto con una alerta
  function doble_remove(e) {
    let idEvent = e.target.id;
    swal({
      title: 'Eliminar',
      text: '¿Está seguro de que desea eliminar este producto?',
      icon: 'warning',
      buttons: ['No', 'Sí'],
    }).then((respuesta) => {
      if (respuesta) {
        swal({
          text: 'El producto ha sido eliminado',
          icon: 'success',
          timer: 8000,
        });
        remover(idEvent);
      }
    });
  }

  // Función para eliminar un producto de la lista
  const remover = async (id) => {
    try {
      await remove_product(id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  // Función para obtener la lista de productos
  const obtener = useCallback(async () => {
    const get = await add_products();
    setProducts(get);
  }, []);

  // Efecto que se ejecuta al cargar el componente para obtener los productos
  useEffect(() => {
    obtener();
  }, [obtener]);

  // Efecto que se ejecuta cuando cambia la búsqueda o la lista de productos
  useEffect(() => {
    setSearch(
      products.filter((product) =>
        product.nombre.toLowerCase().includes(buscador.toLowerCase())
      )
    );
  }, [buscador, products]);

  return (
    <div className='cont_card'>
      {search.map((product) => (
        <Card key={product.id} style={{ width: '14rem' }} className='card'>
          <Card.Img variant='top' src={product.imagen} className='img_card' />
          <Card.Body>
            <div className='cont_edit'>
              {editId === product.id ? (
                <>
                  <input
                    className='input_edit'
                    placeholder={product.nombre}
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <input
                    placeholder={product.clase}
                    className='input_edit'
                    value={clase}
                    onChange={(e) => setClase(e.target.value)}
                  />
                  <input
                    placeholder={product.precio}
                    className='input_edit'
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                  />
                  <Button
                    variant='primary'
                    className='btns_card'
                    onClick={() => confirmarActualizar(product.id, product.imagen)}
                  >
                    ✔️
                  </Button>
                </>
              ) : (
                <>
                  <Card.Title><strong>{product.nombre}</strong></Card.Title>
                  <Card.Text>Tipo: <strong> {product.clase}</strong></Card.Text>
                  <Card.Text>₡{product.precio}</Card.Text>
                </>
              )}
            </div>
            <div className='btn_cards'>
              <Button variant='primary' className='btns_card'>
                Buy
              </Button>
              <Button
                variant='primary'
                className='btns_card'
                onClick={() => edit_Put(product)}
                style={{ display: boton }}
              >
                Edit
              </Button>
              <Button
                variant='primary'
                className='btns_card'
                id={product.id}
                onClick={(e) => doble_remove(e)}
                style={{ display: boton }}
              >
                🗑️
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardComponent;
