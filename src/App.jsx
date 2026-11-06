import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";


import Store from "./Pages/Store";
import Wishlist from "./Pages/WishList";
import YourCart from "./Pages/YourCart";
import ProductDetails from './Pages/Product-Details'
import Login from './Pages/Login'
import Register from "./Pages/Register";
import Checkout from "./Pages/CheckOut";
import MyOrders from "./Pages/Orders";
import AdminOrders from "./Pages/AdminOrders";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminShops from "./Pages/AdminShops";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
    );
    const [currentUser, setCurrentUser] = useState(function () {
    const savedUser = localStorage.getItem("currentUser");

    return savedUser ? JSON.parse(savedUser) : null;
    });
    function handleLogin(user) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(user));

    setIsLoggedIn(true);
    setCurrentUser(user);
    }

    function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    setIsLoggedIn(false);
    setCurrentUser(null);
}   


    const [wishlist, setWishlist] = useState(function () {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];

    });

    useEffect(function () {

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

}, [wishlist]);

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
                path="/login"
                element={<Login onLogin={handleLogin} />}
            />
            <Route path="/register" element={<Register />} />

            {/* Store Layout */}
            <Route
                element={
                    <MainLayout
                        onCategoryChange={setSelectedCategory}
                        isLoggedIn={isLoggedIn}
                        onLogout={handleLogout}
                        currentUser={currentUser}
                    />
                }
            >
                <Route
                    path="/"
                    element={
                        <Store
                            wishlist={wishlist}
                            addToWishlist={addToWishlist}
                            removeFromWishlist={removeFromWishlist}
                            selectedCategory={selectedCategory}
                            setMessage={setMessage}
                        />
                    }
                />

                <Route
                    path="/cart"
                    element={<YourCart setMessage={setMessage} />}
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

                <Route
                    path="/product/:id"
                    element={
                        <ProductDetails
                            setMessage={setMessage}
                            addToWishlist={addToWishlist}
                        />
                    }
                />

                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<MyOrders />} />
            </Route>

            
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/shops" element={<AdminShops />} />

        </Routes>
    </>
);
}

export default App;