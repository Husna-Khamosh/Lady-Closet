import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";


import Store from "./Pages/Store";
import Wishlist from "./Pages/WishList";
import YourCart from "./Pages/YourCart";


function App() {

    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [message, setMessage] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(function () {

    if (message === "") {
        return;
    }

    const timer = setTimeout(function () {
        setMessage("");
    }, 3000);

    return function () {
        clearTimeout(timer);
    };

}, [message]);



    function addToCart(product) {
        setCart(function (previousCart) {
            return [...previousCart, product];
        });
        setMessage(`${product.name} added to cart successfully!`);
    }

    function removeFromCart(product) {
        setCart(function (previousCart) {
            return previousCart.filter(function (addedProduct) {
                return addedProduct.id !== product.id;
            });
        });
        setMessage(`${product.name} removed from cart!`);
    }

    function addToWishlist(product) {
    setWishlist(function (previousWishlist) {

        const alreadyExists = previousWishlist.some(function (item) {
            return item.id === product.id;
        });

        if (alreadyExists) {
        setMessage(`${product.name} is already in your wishlist!`);
            return previousWishlist;
        }
        setMessage(`${product.name} added to wishlist successfully!`);
        return [...previousWishlist, product];
    });
}

function removeFromWishlist(product) {
    setWishlist(function (previousWishlist) {
        return previousWishlist.filter(function (item) {
            return item.id !== product.id;
        });
    });
    setMessage(`${product.name} removed from wishlist!`);
}

   return (
    <>
        {message && (
            <div className={`toast-message ${
                message.includes("removed") ? "toast-remove" : ""
            }`}>
                {message}
            </div>
        )}

        <Routes>

            <Route
                element={<MainLayout cartCount={cart.length} onCategoryChange={setSelectedCategory} />}
            >

                <Route
                    path="/"
                    element={
                        <Store
                            cart={cart}
                            addToCart={addToCart}
                            addToWishlist={addToWishlist}
                            selectedCategory={selectedCategory}
                        />
                    }
                />

                <Route
                    path="/cart"
                    element={
                        <YourCart
                            cart={cart}
                            cartCount={cart.length}
                            onRemoveFromCart={removeFromCart}
                        />
                    }
                />

                <Route
                    path="/wishlist"
                    element={
                        <Wishlist
                            wishlist={wishlist}
                            onRemoveFromWishlist={removeFromWishlist}
                        />
                    }
                />

            </Route>

        </Routes>
    </>
);
}

export default App;