

import CategoryBar from "../Components/CategoryBar";
import ProductPopularCarts from "../Components/ProductCart";
import products from "../Data";




function Store({
    cart,
    addToCart,
    addToWishlist,
    selectedCategory
}) {


  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(function (product) {
          return product.category === selectedCategory;
        });

  return (
    
    <>
    
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
