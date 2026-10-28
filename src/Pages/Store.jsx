
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
  const [message, setMessage] = useState("");


  function addToCart(product) {
    setCart(function (previousCart) {
      return [...previousCart, product];
    });

    setMessage("Product Added To Cart!");
    setTimeout(function () {
    setMessage("");
    }, 3000);
  
  }


{/*remove product from cart button function */}

function removeFromCart(product){
 
  const result = cart.filter(function (addedProduct){
    return addedProduct.id !==product.id;
  });
   setCart(result);
   setMessage("Product Removed From Cart!")
   setTimeout(function(){
    setMessage("");
   }, 3000);
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
        cartCount={cart.length}
      />
    
      {message && (
        <div className={`toast-message ${
          message.includes("Removed") ? "toast-error" : ""
        }`}>
          {message}
        </div>
      )}

      {currentPage === "cart" ? (
        <YourCart cart={cart}
                  cartCount={cart.length}
                  onRemoveFromCart={removeFromCart}
        />
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
