import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import { add_products } from '../../services/getApi';
import './card.css';
import { remove_product } from '../../services/deleteApi';

function CardComponent() {
  const [boton, setBoton] = useState('none');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('Admin_ID') === 'ADMIN') {
      setBoton('block');
    } else {
      setBoton('none');
    }

  })

  const edit_Put = async () =>{
  

  }


  const remover = async (id) => {
    try {
      await remove_product(id);
      setProducts(products.filter(product => product.id !== id));
      alert('Producto eliminado')
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };



  
  useEffect(() =>{
    const getFuncion = async () => {
      try {
          const get = await add_products();
          if (!Array.isArray(get)) {
              throw new Error('La respuesta de la API no es un array');
          }
          const datos = get.map((producto) => {
  
              console.log(producto.nombre);
              console.log(producto.clase);
              
          });
          console.log(get);
          setProducts(get)
      } catch (error) {
          console.error('Error al obtener productos:', error);
      }
      
  }
  getFuncion()
  },[]) 
  



console.log(products);

  return (
    <div className='cont_card'>
      {products.map(product => (
        <Card key={product.id} style={{ width: '14rem' }} className='card'>
          <Card.Img variant="top" src={product.imagen} className='img_card' />
          <Card.Body>
            <Card.Title>{product.nombre}</Card.Title>
            <Card.Text>
              {product.clase}
            </Card.Text>
            <Card.Text>
            ₡{product.precio}
            </Card.Text>
            <div className='btn_cards'>
              <Button variant="primary" className='btns_card'>Buy</Button>
              <Button variant="primary" className='btns_card' onClick={edit_Put} style={{ display: boton }}>Edit</Button>
              <Button variant="primary" className='btns_card' onClick={() => remover(product.id)} style={{ display: boton }} >🗑️</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardComponent;
