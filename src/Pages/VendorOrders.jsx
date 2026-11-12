import React, { useState } from "react";
import "../CSS/VendorDashboard.css";

function VendorOrders({ currentUser }) {
    
    const [orders, setOrders] = useState(() => {
    return JSON.parse(
        localStorage.getItem("orders") || "[]"
    );
    });
    const vendorOrders = orders.map(function(order) {
    const vendorShopName = JSON.parse(
    localStorage.getItem("currentUser") || "{}"
    ).shopName || currentUser?.shopName || "";

    const vendorItems = order.items.filter(function(item) {
    return (
        item.shop?.trim().toLowerCase() ===
        vendorShopName.trim().toLowerCase()
    );
});

    return {
        ...order,
        items: vendorItems
    };
    

    }).filter(function(order) {
        return order.items.length > 0;
    });


    const totalOrders = vendorOrders.length;

    const pendingOrders = vendorOrders.filter(function(order) {
        return order.status === "Pending";
    }).length;

    const processingOrders = vendorOrders.filter(function(order) {
        return ["Processing", "Packed", "Shipped"].includes(order.status);
    }).length;

    const completedOrders = vendorOrders.filter(function(order) {
        return order.status === "Delivered";
    }).length;






    return (
        <div className="vendor-orders-page">

            <div className="vendor-orders-header">
                <div>
                    <h2>My Orders</h2>
                    <p>Manage and track your shop orders.</p>
                </div>
            </div>

            <div className="vendor-orders-stats">

                <div className="vendor-order-stat">
                    <h4>Total Orders</h4>
                    <h2>{totalOrders}</h2>
                    <p>All received orders</p>
                </div>

                <div className="vendor-order-stat">
                    <h4>Pending Orders</h4>
                    <h2>{pendingOrders}</h2>
                    <p>Waiting for confirmation</p>
                </div>

                <div className="vendor-order-stat">
                    <h4>Processing Orders</h4>
                    <h2>{processingOrders}</h2>
                    <p>Orders being prepared</p>
                </div>

                <div className="vendor-order-stat">
                    <h4>Completed Orders</h4>
                    <h2>{completedOrders}</h2>
                    <p>Successfully delivered</p>
                </div>

            </div>

            <div className="vendor-orders-list">

                <h3>Recent Orders</h3>

                {vendorOrders.length === 0 ? (
                    <p className="no-orders">
                        No orders received yet.
                    </p>
                ) : (
                    vendorOrders.map(function(order) {

                        return (
                            <div className="vendor-order-card" key={order.id}>

                                <div className="vendor-order-card-header">
                                    <div>
                                        <h4>Order #{order.id}</h4>
                                        <p>Customer: {order.customerName}</p>
                                    </div>

                                    <span className="vendor-order-status">
                                        {order.status}
                                    </span>
                                </div>

                                <div className="vendor-order-items">

                                    {order.items.map(function(item) {

                                        return (
                                            <div className="vendor-order-item" key={item.id}>

                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                />

                                                <div>
                                                    <h4>{item.name}</h4>
                                                    <p>Quantity: {item.quantity}</p>
                                                    <p>Price: {item.price}</p>
                                                </div>

                                            </div>
                                        );
                                    })}

                                </div>

                                <div className="vendor-order-total">
                                    <strong>Total: {order.total}</strong>
                                </div>

                            </div>
                        );
                    })
                )}

            </div>

        </div>
    );
}

export default VendorOrders;