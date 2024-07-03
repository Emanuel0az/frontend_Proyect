import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import { add_products } from '../../services/getApi';
import './card.css';
import { remove_product } from '../../services/deleteApi';
import {updateProduct} from '../../services/updateApi'

function CardComponent() {

  const [boton, setBoton] = useState('none');
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState('none')
  const [word, setWord] = useState('block')


  useEffect(() => {
    if (localStorage.getItem('Admin_ID') === 'ADMIN') {
      setBoton('block');
    } else {
      setBoton('none');
    }

  })

  let estado = 'EDITOR'

  const edit_Put = async () =>{
    localStorage.setItem('Edicion',estado)
    if (localStorage.getItem('Edicion') === 'EDITOR') {
      setInput('block')
      setWord('none')
    }else {
      setInput('none')
      setWord('block')
    }


    try {
      await updateProduct();
      setProducts(products.filter(product => product.id === id));
      alert('Producto actualizado')
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }

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
            <div className='cont_edit'>
            <Card.Title style={{ display: word }}>{product.nombre}
             </Card.Title>
             <input style={{ display: input }} className='input_edit' placeholder={product.nombre}></input>
            <Card.Text style={{ display: word }}>
              {product.clase}
            </Card.Text>
            <input style={{ display: input }} placeholder={product.clase} className='input_edit'></input>
            <Card.Text style={{ display: word }}>
            ₡{product.precio}
            </Card.Text>
            <input style={{ display: input }} placeholder={product.precio} className='input_edit'></input>
            </div>
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
