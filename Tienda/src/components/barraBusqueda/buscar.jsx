import React, { useState, useEffect, useCallback } from 'react';
import { add_products } from '../../services/getApi';

const Buscar = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  const obtener = useCallback(async () => {
    const get = await add_products();
    console.log(get);
  }, []);

  useEffect(() => {
    obtener();
  }, [obtener]);





  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);



    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };




  return (

    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Buscar productos..."
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Buscar;