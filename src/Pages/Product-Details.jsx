import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../Data";
import { useCart } from "../Context/CartContext";


function ProductDetails({setMessage, addToWishlist}) {
    const { id } = useParams();

    const selectedProduct = products.find(function (product) {
        return product.id === Number(id);
    });

    const [activeImage, setActiveImage] = useState(null);

    if (!selectedProduct) {
        return <h2>Product not found!</h2>;
    }

    const productImages = selectedProduct.images?.length
        ? selectedProduct.images
        : [selectedProduct.image];

    const mainImage = activeImage || productImages[0];

    const { addItem } = useCart();
    const [selectedColor, setSelectedColor] = useState("Black");
    const [selectedSize, setSelectedSize] = useState("M");
    const [quantity, setQuantity] = useState(1);
    
    function handleAddToCart() {
    const cartProduct = {
        ...selectedProduct,
        selectedColor,
        selectedSize,
        quantity
    };

    addItem(cartProduct);

    setMessage(`${selectedProduct.name} added to cart successfully!`);
}

    return (
        <>
        <div className="product-details-container">

            <div className="product-details-left">

                <img
                    className="main-product-image"
                    src={mainImage}
                    alt={selectedProduct.name}
                />

                <div className="product-photos">
                    {productImages.map(function (image, index) {
                        return (
                            <img
                                key={index}
                                src={image}
                                alt={`${selectedProduct.name} ${index + 1}`}
                                onClick={function () {
                                    setActiveImage(image);
                                }}
                            />
                        );
                    })}
                </div>

            </div>

            <div className="product-details-right">
                <h2 className="product-name">
                    {selectedProduct.name}
                </h2>

                <h3 className="product-price">
                    AFN {selectedProduct.price.toLocaleString()}
                </h3>

                <div className="rate-sold">
                    <span>⭐ {selectedProduct.rating}</span>
                    <span>{selectedProduct.shop}</span>
                </div>

                <div className="product-color">

                    <h4>Color: {selectedColor}</h4>

                    <div className="color-options">

                        <button
                            className={`color-btn ${selectedColor === "Black" ? "active" : ""}`}
                            style={{ backgroundColor: "black" }}
                            onClick={() => setSelectedColor("Black")}
                        ></button>

                        <button
                            className={`color-btn ${selectedColor === "White" ? "active" : ""}`}
                            style={{ backgroundColor: "white" }}
                            onClick={() => setSelectedColor("White")}
                        ></button>

                        <button
                            className={`color-btn ${selectedColor === "Brown" ? "active" : ""}`}
                            style={{ backgroundColor: "brown" }}
                            onClick={() => setSelectedColor("Brown")}
                        ></button>

                    </div>
                </div>

                   <div className="product-size">

                    <h4>Size: {selectedSize}</h4>

                    <div className="size-options">

                        {["S", "M", "L", "XL"].map(function (size) {
                            return (
                                <button
                                    key={size}
                                    className={`size-btn ${selectedSize === size ? "active" : ""}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            );
                        })}

                    </div>
                </div>
                        <div className="quantity">
                            <button
                                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} >
                                -
                            </button>
                            <span>{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)} >
                                +
                            </button>
                        </div>

                        <div className="cart-actions">
                            <button
                                className="add-to-cart-btn"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                            <button
                                className="product-wishlist-btn"
                                onClick={() => addToWishlist(selectedProduct)}
                                title="Add to Wishlist"
                            >
                                ♡
                            </button>
                        </div>
            </div>

        </div>

                        {selectedProduct.description && (
                                <div className="product-description">

                                    <h3>Product Description</h3>

                                    <p>{selectedProduct.description}</p>

                                </div>
                            )}
                        <div className="product-information">

                                <h3>Product Information</h3>

                                <div className="information-row">
                                    <span>Product ID</span>
                                    <span>#{selectedProduct.id}</span>
                                </div>

                                <div className="information-row">
                                    <span>Category</span>
                                    <span>{selectedProduct.category}</span>
                                </div>

                                <div className="information-row">
                                    <span>Sold By</span>
                                    <span>{selectedProduct.shop}</span>
                                </div>

                                <div className="information-row">
                                    <span>Customer Rating</span>
                                    <span>⭐ {selectedProduct.rating} / 5</span>
                                </div>

                            </div>
                            </>
        
    );
    
}

export default ProductDetails;