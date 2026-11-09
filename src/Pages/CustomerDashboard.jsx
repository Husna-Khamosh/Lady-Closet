
import React, { useState, useEffect } from "react";
import CustomerSidebar from "../Components/CustomerSidebar";
import "../CSS/CustomerDashboard.css";

function CustomerDashboard({ currentUser, wishlist, onRemoveFromWishlist  }) {

    const [activeTab, setActiveTab] = useState("overview");
    const [orders, setOrders] = useState([]);
    const [addresses, setAddresses] = useState([]);

    const [profileImage, setProfileImage] = useState(
    currentUser?.profileImage || "/images/woman.png"
    );

    const [selectedImage, setSelectedImage] = useState(null);
        useEffect(() => {

    if (!currentUser?.email) {
        setAddresses([]);
        return;
    }

    const addressKey = `deliveryAddresses_${currentUser.email}`;

    const savedAddresses = JSON.parse(
        localStorage.getItem(addressKey)
    ) || [];

    setAddresses(savedAddresses);

}, [currentUser?.email]);

    useEffect(() => {
    function loadOrders() {
        const savedOrders = JSON.parse(
            localStorage.getItem("orders")
        ) || [];

        const userOrders = savedOrders.filter(function (order) {
            return (
                order.customerEmail?.toLowerCase() ===
                currentUser?.email?.toLowerCase()
            );
        });

        setOrders(userOrders);
    }

    loadOrders();

    window.addEventListener("ordersUpdated", loadOrders);

    return () => {
        window.removeEventListener("ordersUpdated", loadOrders);
    };
}, [currentUser]);

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) return;
        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function () {
            setSelectedImage(reader.result);
        };

        reader.readAsDataURL(file);
    }

    function handleSaveProfile() {

    const updatedUser = {
        ...currentUser,
        profileImage: selectedImage || profileImage
    };

    const savedUsers = JSON.parse(
        localStorage.getItem("users") || "[]"
    );

    const updatedUsers = savedUsers.map(function (user) {
        return user.email.toLowerCase() ===
            currentUser.email.toLowerCase()
            ? updatedUser
            : user;
    });

    localStorage.setItem(
        "users",
        JSON.stringify(updatedUsers)
    );

    localStorage.setItem(
        "currentUser",
        JSON.stringify(updatedUser)
    );

    setProfileImage(updatedUser.profileImage);
    setSelectedImage(null);

    alert("Profile updated successfully!");
}
    return (
        <div className="customer-dashboard">

            <CustomerSidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <main className="customer-dashboard-content">

                <h2>Welcome, {currentUser?.fullName}!</h2>

                <p>Manage your account and shopping activities.</p>

                {activeTab === "overview" && (
                    <div className="customer-overview">

                        <div className="customer-welcome">
                            <div className="customer-info">
                                <img
                                    src={
                                        currentUser?.profileImage ||
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTws7pooogCH-1Oh_b7lGn_7JCtR66mu_jIiKMvidXbvg&s"
                                    }
                                    alt="Customer Profile"
                                />

                                <div>
                                    <h3>{currentUser?.fullName}</h3>
                                    <p>{currentUser?.email}</p>
                                </div>
                            </div>

                            <p>Welcome to your Lady Closet account!</p>
                        </div>

                        <div className="customer-stats">

                            <div className="customer-stat-card">
                                <h4>Total Orders</h4>
                                <h2>{orders.length}</h2>
                                <p>Your placed orders</p>
                            </div>

                            <div className="customer-stat-card">
                                <h4>Wishlist Items</h4>
                                <h2>{wishlist.length}</h2>
                                <p>Your favorite products</p>
                            </div>

                        </div>

                        <div className="recent-orders">
                            <h3>Recent Orders</h3>

                            {orders.length === 0 ? (
                                <p>You haven't placed any orders yet.</p>
                            ) : (
                                orders.slice(-3).reverse().map(function (order) {
                                    return (
                                        <div className="recent-order-item" key={order.id}>
                                            <div>
                                                <h4>{order.id}</h4>
                                                <p>
                                                    {new Date(order.date).toLocaleDateString()}
                                                </p>
                                            </div>

                                            <div>
                                                <span>{order.status}</span>
                                                <p>
                                                    AFN {Number(order.total).toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>

                    </div>
                )}

                {activeTab === "profile" && (
                        <div className="customer-profile">

                            <div className="profile-header">
                                <h3>My Profile</h3>
                                <p>Manage your personal information.</p>
                            </div>

                            <div className="profile-card">

                                <div className="profile-avatar">

                                    <img
                                        src={selectedImage || profileImage}
                                        alt="Customer Profile"
                                    />

                                    <label htmlFor="profile-image">
                                        Change Photo
                                    </label>

                                    <input
                                        type="file"
                                        id="profile-image"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        hidden
                                    />

                                </div>

                                <div className="profile-form">

                                    <div className="profile-input-group">
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            value={currentUser?.fullName || ""}
                                            readOnly
                                        />
                                    </div>

                                    <div className="profile-input-group">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            value={currentUser?.email || ""}
                                            readOnly
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleSaveProfile}
                                    >
                                        Save Changes
                                    </button>
                                </div>

                            </div>

                        </div>
                    )}

                {activeTab === "orders" && (
                    <div className="my-orders-section">
                        <h3>My Orders</h3>

                        {orders.length === 0 ? (
                            <p>You haven't placed any orders yet.</p>
                        ) : (
                            orders.slice().reverse().map(function (order) {
                                return (
                                    <div className="my-order-card" key={order.id}>
                                        <div className="my-order-header">
                                            <div>
                                                <h4>{order.id}</h4>
                                                <p>
                                                    {new Date(order.date).toLocaleDateString()}
                                                </p>
                                            </div>

                                            <span>{order.status}</span>
                                        </div>

                                        <div className="my-order-products">
                                        {order.items?.map(function (item, index) {
                                            return (
                                                <div className="my-order-product" key={item.id || index}>

                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="order-product-image"
                                                    />

                                                    <div>
                                                        <h5>{item.name}</h5>
                                                        <p>Quantity: {item.quantity}</p>
                                                    </div>

                                                    <strong>
                                                        AFN {Number(item.price).toLocaleString()}
                                                    </strong>

                                                </div>
                                            );
                                        })}
                                    </div>

                                        <div className="my-order-footer">
                                            <span>Total Amount</span>
                                            <strong>
                                                AFN {Number(order.total).toLocaleString()}
                                            </strong>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                )}

                {activeTab === "addresses" && (
                    <div className="addresses-section">

                        <div className="addresses-header">
                            <h3>My Addresses</h3>
                            <p>Manage your saved delivery addresses.</p>
                        </div>

                        {addresses.length === 0 ? (
                            <div className="empty-addresses">
                                <h4>No addresses saved yet.</h4>
                                <p>Your delivery addresses will appear here.</p>
                            </div>
                        ) : (
                            <div className="addresses-list">

                                {addresses.map((address) => (
                                    <div className="saved-address-card" key={address.id}>

                                        <div className="saved-address-top">
                                            <h4>{address.title}</h4>
                                            <span>Saved Address</span>
                                        </div>

                                        <p><strong>{address.name}</strong></p>

                                        <p>{address.address}</p>

                                        <p>{address.phone}</p>

                                    </div>
                                ))}

                            </div>
                        )}

                    </div>
                )}

                {activeTab === "wishlist" && (
                    <div className="customer-wishlist">

                        <div className="wishlist-header">
                            <h3>My Wishlist</h3>
                            <p>{wishlist.length} products saved</p>
                        </div>

                        {wishlist.length === 0 ? (
                            <div className="empty-wishlist">
                                <h4>Your wishlist is empty!</h4>
                                <p>Products you save will appear here.</p>
                            </div>
                        ) : (
                            <div className="customer-wishlist-grid">

                                {wishlist.map((product) => (
                                    <div className="customer-wishlist-card" key={product.id}>

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                        />

                                        <div className="wishlist-product-info">

                                            <h4>{product.name}</h4>

                                            <p className="wishlist-shop">
                                                {product.shop}
                                            </p>

                                            <p className="wishlist-price">
                                                AFN {Number(product.price).toLocaleString()}
                                            </p>

                                            <button
                                                type="button"
                                                onClick={() => onRemoveFromWishlist(product)}
                                            >
                                                Remove
                                            </button>

                                        </div>

                                    </div>
                                ))}

                            </div>
                        )}

                    </div>
                )}

                {activeTab === "settings" && (
                    <div>
                        <h3>Account Settings</h3>
                    </div>
                )}

            </main>

        </div>
    );
}


export default CustomerDashboard;