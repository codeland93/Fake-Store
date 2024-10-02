import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'; 

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(response => setProduct(response.data))
        .catch(error => console.error("Error fetching product details: ", error));
    }
  }, [productId]);

  if (!product) return <div>Loading product details...</div>;

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" />
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.description}</p>
      <p>Rating: {product.rating.rate} / 5 ({product.rating.count} reviews)</p>
    </div>
  );
};


ProductDetail.propTypes = {
  productId: PropTypes.number.isRequired, 
};

export default ProductDetail;
