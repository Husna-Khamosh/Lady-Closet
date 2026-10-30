import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Store from "./Pages/Store";
import Wishlist from "./Pages/WishList";
import YourCart from "./Pages/YourCart";

function App() {

    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    function addToCart(product) {
        setCart(function (previousCart) {
            return [...previousCart, product];
        });
    }

    function removeFromCart(product) {
        setCart(function (previousCart) {
            return previousCart.filter(function (addedProduct) {
                return addedProduct.id !== product.id;
            });
        });
    }

    function addToWishlist(product) {
    setWishlist(function (previousWishlist) {

        const alreadyExists = previousWishlist.some(function (item) {
            return item.id === product.id;
        });

        if (alreadyExists) {
            return previousWishlist;
        }

        return [...previousWishlist, product];
    });
}

function removeFromWishlist(product) {
    setWishlist(function (previousWishlist) {
        return previousWishlist.filter(function (item) {
            return item.id !== product.id;
        });
    });
}

    return (
        <Routes>
            <Route path="/" element={<Store cart={cart} addToCart={addToCart} addToWishlist={addToWishlist}/>} />
            <Route path="/cart" element={<YourCart cart={cart} cartCount={cart.length} onRemoveFromCart={removeFromCart}/>}/>
            <Route path="/wishlist" element={<Wishlist wishlist={wishlist}  onRemoveFromWishlist={removeFromWishlist}/>} />
        </Routes>
    );
}

export default App;