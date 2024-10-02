import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'; 

const ProductList = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products: ", error));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} onClick={() => onSelectProduct(product.id)} className="product-item">
          <img src={product.image} alt={product.title} width="100" />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};


ProductList.propTypes = {
  onSelectProduct: PropTypes.func.isRequired, 
};

export default ProductList;
