import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../Data";
import { useCart } from "../Context/CartContext";

function ProductDetails() {
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
}

    return (
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
                            className="color-btn"
                            style={{ backgroundColor: "black" }}
                            onClick={() => setSelectedColor("Black")}
                        ></button>

                        <button
                            className="color-btn"
                            style={{ backgroundColor: "white" }}
                            onClick={() => setSelectedColor("White")}
                        ></button>

                        <button
                            className="color-btn"
                            style={{ backgroundColor: "brown" }}
                            onClick={() => setSelectedColor("Brown")}
                        ></button>

                    </div>

                </div>

                <div className="product-size">

                    <h4>Size: {selectedSize}</h4>

                    <div className="size-options">

                        <button
                            className="size-btn"
                            onClick={() => setSelectedSize("S")}
                        >
                            S
                        </button>

                        <button
                            className="size-btn"
                            onClick={() => setSelectedSize("M")}
                        >
                            M
                        </button>

                        <button
                            className="size-btn"
                            onClick={() => setSelectedSize("L")}
                        >
                            L
                        </button>

                        <button
                            className="size-btn"
                            onClick={() => setSelectedSize("XL")}
                        >
                            XL
                        </button>

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
                        </div>
            </div>

        </div>
    );
}

export default ProductDetails;