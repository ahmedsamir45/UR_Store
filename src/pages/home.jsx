import React, { useState, useEffect } from 'react';
import styles from '../styles/home.module.css'; // Import the CSS module

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const addNewProduct = (e) => {
    e.preventDefault();
    if (!productName || !productDescription || !productPrice || !productImage) {
      alert('Please fill all fields and select an image');
      return;
    }

    const newProduct = {
      id: products.length + 1,
      title: productName,
      description: productDescription,
      price: productPrice,
      image: URL.createObjectURL(productImage),
    };

    setProducts([...products, newProduct]);
    resetForm();
  };

  const resetForm = () => {
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductImage(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewMore = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className={`container ${styles.container}`}>
      <h1 className="text-center mb-4">Products Page</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className={`form-control ${styles.searchBar}`}
        />
      </div>

      {/* Add Product Form */}
      <form onSubmit={addNewProduct} className={`mb-4 ${styles.form}`}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="form-control mb-3"
          required
        />
        <input
          type="text"
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="form-control mb-3"
          required
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="form-control mb-3"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProductImage(e.target.files[0])}
          className="form-control mb-3"
          required
        />
        <button type="submit" className={`btn btn-dark ${styles.button}`}>
          Add Product
        </button>
      </form>

      {/* Display Products */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className={`card ${styles.productCard}`}>
                <img src={product.image} alt={product.title} className={styles.cardImage} />
                <div className="card-body">
                  <h5 className={styles.title}>{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <button onClick={() => handleViewMore(product)} className={`btn btn-dark ${styles.button}`}>
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>

      {/* Show More Information about Selected Product */}
      {selectedProduct && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.title} className={styles.modalImage} />
            <p>{selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
            <button onClick={() => setSelectedProduct(null)} className={`btn btn-dark ${styles.button}`}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
