import React from 'react';
import styles from '../styles/card.module.css'; // Import the CSS module

const ProductCard = ({ product, onViewMore }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card ${styles.productCard} shadow-sm`}>
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
          <button 
            onClick={() => onViewMore(product)} 
            className={`btn btn-dark ${styles.viewMoreBtn}`}>
            <i className="fas fa-info-circle"></i> View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
