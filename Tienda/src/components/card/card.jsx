import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect, useCallback } from 'react';
import { add_products } from '../../services/getApi';
import './card.css';
import { remove_product } from '../../services/deleteApi';
import { updateProduct } from '../../services/updateApi';

function CardComponent() {
  const [boton, setBoton] = useState('none');
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState('none');
  const [word, setWord] = useState('block');
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
      setInput('block');
      setWord('none');
      setNombre(producto.nombre);
      setClase(producto.clase);
      setPrecio(producto.precio);
      setEditId(producto.id);
    } else {
      setInput('none');
      setWord('block');
    }
  };

  const guardar = async (id,imagen) => {
    try {
       updateProduct(id, nombre, clase, precio,imagen);
      setProducts(products.map(product => 
        product.id === editId 
          ? { ...product, nombre, clase, precio } 
          : product
      ));
      // alert('Producto actualizado');
      setInput('none');
      setWord('block');
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  const remover = async (id) => {
    try {
      await remove_product(id);
      setProducts(products.filter(product => product.id !== id));
      alert('Producto eliminado');
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const obtener = useCallback(async () => {
    const get = await add_products();
    console.log(get);
    setProducts(get);
  }, []);

  useEffect(() => {
    obtener();
  }, [obtener]);

  console.log(products);

  return (
    <div className='cont_card'>
      {products.map(product => (
        <Card key={product.id} style={{ width: '14rem' }} className='card'>
          <Card.Img variant="top" src={product.imagen} className='img_card' />
          <Card.Body>
            <div className='cont_edit'>
              <Card.Title style={{ display: word }}>{product.nombre}</Card.Title>
              <input 
                style={{ display: input }} 
                className='input_edit' 
                placeholder={product.nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <Card.Text style={{ display: word }}>{product.clase}</Card.Text>
              <input 
                style={{ display: input }} 
                placeholder={product.clase} 
                className='input_edit'
                onChange={(e) => setClase(e.target.value)}
              />
              <Card.Text style={{ display: word }}>₡{product.precio}</Card.Text>
              <input 
                style={{ display: input }} 
                placeholder={product.precio} 
                className='input_edit'     
                onChange={(e) => setPrecio(e.target.value)}
              />      
              <Button 
                variant="primary" 
                className='btns_card' 
                onClick={() => guardar(product.id,product.imagen)} 
                style={{ display: input }}
              >✔️</Button>
            </div>
            <div className='btn_cards'>
              <Button variant="primary" className='btns_card'>Buy</Button>
              <Button 
                variant="primary" 
                className='btns_card' 
                onClick={() => edit_Put(product)} 
                style={{ display: boton }}
              >Edit</Button>              
              <Button 
                variant="primary" 
                className='btns_card' 
                onClick={() => remover(product.id)} 
                style={{ display: boton }}
              >🗑️</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardComponent;
