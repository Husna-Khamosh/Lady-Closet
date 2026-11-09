import { useParams } from "react-router-dom";
import ProductPopularCarts from "../Components/ProductCart";
import products from "../Data";
import { useCart } from "../Context/CartContext";
import FilterSidebar from "../Components/FilterSidebar";
import { useState } from "react";
import "../CSS/categoryPage.css";

function CategoryPage({
    wishlist,
    addToWishlist,
    removeFromWishlist,
    setMessage
}) {

    const { category } = useParams();
    const { addItem } = useCart();
    // Price Filter
    const [priceRange, setPriceRange] = useState({
        min: 0,
        max: 100000
    });
    const [selectedShops, setSelectedShops] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const categoryProducts =
    category === "All Products"
        ? products
        : products.filter(function (product) {
            return product.category === category;
        });

    const shops = [
        ...new Set(categoryProducts.map(function (product) {
            return product.shop;
        }))
    ];

    const filteredProducts = categoryProducts.filter(function (product) {

    const matchesPrice =
        product.price >= priceRange.min &&
        product.price <= priceRange.max;

    const matchesShop =
        selectedShops.length === 0 ||
        selectedShops.includes(product.shop);

    const matchesRating =
        product.rating >= minRating;

    return matchesPrice && matchesShop && matchesRating;
});

function handleAddToCart(product) {
    addItem(product);
    setMessage(`${product.name} added to cart successfully!`);
}

return (
    <div className="category-page-container">

        <FilterSidebar
            shops={shops}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedShops={selectedShops}
            setSelectedShops={setSelectedShops}
            minRating={minRating}
            setMinRating={setMinRating}
        />

        <div className="category-products">
            <h2>{category}</h2>

            <ProductPopularCarts
                products={filteredProducts}
                wishlist={wishlist}
                onAddToCart={handleAddToCart}
                onAddToWishlist={addToWishlist}
                onRemoveFromWishlist={removeFromWishlist}
            />
        </div>

    </div>
);

}

export default CategoryPage;