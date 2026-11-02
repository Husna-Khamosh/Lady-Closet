
import React from "react";
import "../CSS/store.css";
import { Link } from "react-router-dom";


function ProductPopularCarts({ products, onAddToCart, onAddToWishlist }) {
  
  return (
    <>
      <h3 className="section-title">
        Popular in This Week:
      </h3>

      <div className="Popular-week">
        {products.map(function (product) {
          return (
            <div className="popluar-week-cart" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              
              <button
                type="button"
                className="add-to-wishlist"
                aria-label={`Add ${product.name} to wishlist`}
                onClick={() => onAddToWishlist(product)}
            >
                ♡
            </button>

              <Link to={`/product/${product.id}`} className="product-details-link">
                <h4 className="product-name">
                {product.name}
                </h4>
              </Link>
              

              <span className="rate">
                ⭐ {product.rating}
              </span>

              <div className="price-row">
                <h4 className="product-price">
                  AFN {product.price.toLocaleString()}
                </h4>

                <span
                  type="button"
                  className="add-to-cart"
                  aria-label={`Add ${product.name} to cart`}
                  onClick={() => {
  console.log("Added product:", product);
  onAddToCart(product);
}}
                >
                  +
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductPopularCarts;
