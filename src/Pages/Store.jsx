
import { useState } from "react";

import Header from "../Components/Header";
import CategoryBar from "../Components/CategoryBar";
import ProductPopularCarts from "../Components/ProductCart";
import products from "../Data";
import YourCart from "./YourCart";

function Store() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState("store");
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(function (previousCart) {
      return [...previousCart, product];
    });
  }

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
        onCartClick={() => setCurrentPage("cart")}
      />

      {currentPage === "cart" ? (
        <YourCart cart={cart} />
      ) : (
        <>
          <CategoryBar />

          <ProductPopularCarts
            products={filteredProducts}
            onAddToCart={addToCart}
          />
        </>
      )}
    </>
  );
}
export default Store;
