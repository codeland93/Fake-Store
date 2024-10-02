import { useState } from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import './App.css'; 


function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
  };

  return (
    <div className="App">
      <ProductList onSelectProduct={handleProductSelect} />
      {selectedProductId && <ProductDetail productId={selectedProductId} />}
    </div>
  );
}

export default App;
