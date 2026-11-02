

import CategoryBar from "../Components/CategoryBar";
import ProductPopularCarts from "../Components/ProductCart";
import products from "../Data";
import { useCart } from "../Context/CartContext";




function Store({
        wishlist,
        addToWishlist,
        removeFromWishlist,
        selectedCategory,
        setMessage
}) {

  const { addItem } = useCart();

  function handleAddToCart(product) {
    addItem(product);
    setMessage(`${product.name} added to cart successfully!`);
}

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
        wishlist={wishlist}
        onAddToCart={handleAddToCart}
        onAddToWishlist={addToWishlist}
        onRemoveFromWishlist={removeFromWishlist}   
    />
    </>
  );
}
export default Store;
