
import React from "react";
import "../CSS/store.css";


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
              <img src={product.image} alt={product.name} />
              <button
                type="button"
                className="add-to-wishlist"
                aria-label={`Add ${product.name} to wishlist`}
                onClick={() => onAddToWishlist(product)}
            >
                ♡
            </button>

              <h4 className="product-name">
                {product.name}
              </h4>

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
