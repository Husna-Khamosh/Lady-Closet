

import CategoryBar from "../Components/CategoryBar";
import ProductPopularCarts from "../Components/ProductCart";
import products from "../Data";
import { useCart } from "../Context/CartContext";
import React, { useState, useEffect } from "react";




function Store({
    wishlist,
    addToWishlist,
    removeFromWishlist,
    selectedCategory,
    setSelectedCategory,
    setMessage
}) {

  const { addItem } = useCart();

  const allProducts = products;

  function handleAddToCart(product) {
    addItem(product);
    setMessage(`${product.name} added to cart successfully!`);
}

 const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter(function (product) {
          return product.category === selectedCategory;
        });

  return (
    
    <>
    
    <CategoryBar onCategoryChange={setSelectedCategory} />
    <ProductPopularCarts
        products={filteredProducts}
        wishlist={wishlist}
        onAddToCart={handleAddToCart}
        onAddToWishlist={addToWishlist}
        onRemoveFromWishlist={removeFromWishlist}   
    />
    </>
  );
}
export default Store;
