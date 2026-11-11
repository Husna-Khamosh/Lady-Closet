import React, { useState } from "react";
import "../CSS/VendorDashboard.css";

function VendorOrders({ currentUser }) {
    
    const [orders, setOrders] = useState(() => {
    return JSON.parse(
        localStorage.getItem("orders") || "[]"
    );
    });
    const vendorOrders = orders.map(function(order) {

    const vendorItems = order.items.filter(function(item) {
        return item.shop === currentUser.shopName;
    });

    return {
        ...order,
        items: vendorItems
    };

    }).filter(function(order) {
        return order.items.length > 0;
    });






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
                    <h2>0</h2>
                    <p>All received orders</p>
                </div>

                <div className="vendor-order-stat">
                    <h4>Pending Orders</h4>
                    <h2>0</h2>
                    <p>Waiting for confirmation</p>
                </div>

                <div className="vendor-order-stat">
                    <h4>Processing Orders</h4>
                    <h2>0</h2>
                    <p>Orders being prepared</p>
                </div>

                <div className="vendor-order-stat">
                    <h4>Completed Orders</h4>
                    <h2>0</h2>
                    <p>Successfully delivered</p>
                </div>

            </div>

        </div>
    );
}

export default VendorOrders;