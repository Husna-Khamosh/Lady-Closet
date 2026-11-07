import { useParams } from "react-router-dom";
import ProductPopularCarts from "../Components/ProductCart";
import products from "../Data";
import { useCart } from "../Context/CartContext";

function CategoryPage({
    wishlist,
    addToWishlist,
    removeFromWishlist,
    setMessage
}) {

    const { category } = useParams();
    const { addItem } = useCart();

    const categoryProducts =
    category === "All Products"
        ? products
        : products.filter(function (product) {
            return product.category === category;
        });


function handleAddToCart(product) {
    addItem(product);
    setMessage(`${product.name} added to cart successfully!`);
}

return (
    <>
        <h2>{category}</h2>

        <ProductPopularCarts
            products={categoryProducts}
            wishlist={wishlist}
            onAddToCart={handleAddToCart}
            onAddToWishlist={addToWishlist}
            onRemoveFromWishlist={removeFromWishlist}
        />
    </>
);

}

export default CategoryPage;