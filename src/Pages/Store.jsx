

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
  const [vendorProducts, setVendorProducts] = useState(() => {
    return JSON.parse(
        localStorage.getItem("vendorProducts") || "[]"
    );
});

useEffect(() => {
    function updateVendorProducts() {
        setVendorProducts(
            JSON.parse(
                localStorage.getItem("vendorProducts") || "[]"
            )
        );
    }

    window.addEventListener("vendorProductsUpdated", updateVendorProducts);

    return () => {
        window.removeEventListener("vendorProductsUpdated", updateVendorProducts);
    };
}, []);
  const allProducts = [...products, ...vendorProducts];


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
