
import { useState } from "react";

import Header from "../Components/Header";
import CategoryBar from "../Components/CategoryBar";
import ProductPopularCarts from "../Components/ProductCart";
import products from "../Data";


function Store({cart, addToCart, addToWishlist}) {
  const [selectedCategory, setSelectedCategory] = useState("All");



  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(function (product) {
          return product.category === selectedCategory;
        });

  return (
    
    <>
      <Header
        onCategoryChange={setSelectedCategory}
        cartCount={cart.length}
      />
    <CategoryBar />
    <ProductPopularCarts
        products={filteredProducts}
        onAddToCart={addToCart}
        onAddToWishlist={addToWishlist}
    />
    </>
  );
}
export default Store;
