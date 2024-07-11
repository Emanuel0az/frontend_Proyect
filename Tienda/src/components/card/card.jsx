import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect, useCallback } from 'react';
import { add_products } from '../../services/getApi';
import './card.css';
import { remove_product } from '../../services/deleteApi';
import { updateProduct } from '../../services/updateApi';
import swal from 'sweetalert';

function CardComponent({ buscador }) {
  const [boton, setBoton] = useState('none');
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const [nombre, setNombre] = useState('');
  const [clase, setClase] = useState('');
  const [precio, setPrecio] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('Admin_ID') === 'ADMIN') {
      setBoton('block');
    } else {
      setBoton('none');
    }
  }, []);

  const estado = 'EDITOR';

  const edit_Put = (producto) => {
    localStorage.setItem('Edicion', estado);
    if (localStorage.getItem('Edicion') === 'EDITOR') {
      setNombre(producto.nombre);
      setClase(producto.clase);
      setPrecio(producto.precio);
      setEditId(producto.id);
    }
  };

  const guardar = async (id, imagen) => {
    console.log(id, nombre, clase, precio);
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

  function doble_remove(e) {
    let idEvent = e.target.id; // variable que contiene el id del producto
    console.log(e.target.id);
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

  const remover = async (id) => {
    try {
      await remove_product(id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      // alert('Hubo un problema al eliminar el recurso: ' + error.message);
    }
  };

  const obtener = useCallback(async () => {
    const get = await add_products();
    // console.log(get);
    setProducts(get);
  }, []);

  useEffect(() => {
    obtener();
  }, [obtener]);

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
                id={product.id} // obtiene el id de los productos
                onClick={(e) => doble_remove(e)} // creamos un evento y lo enviamos a la funcion 
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
