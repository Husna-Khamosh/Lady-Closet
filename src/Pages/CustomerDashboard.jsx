
import React, { useState, useEffect } from "react";
import CustomerSidebar from "../Components/CustomerSidebar";
import "../CSS/CustomerDashboard.css";

function CustomerDashboard({ currentUser, wishlist  }) {

    const [activeTab, setActiveTab] = useState("overview");
    const [orders, setOrders] = useState([]);
    const [addresses, setAddresses] = useState([]);
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
                    <div>
                        <h3>My Profile</h3>
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
                    <div>
                        <h3>My Wishlist</h3>
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