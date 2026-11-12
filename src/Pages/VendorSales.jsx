
import React, { useState } from "react";
import "../CSS/VendorDashboard.css";

function VendorSales({ currentUser }) {
    const [orders] = useState(() => {
        return JSON.parse(
            localStorage.getItem("orders") || "[]"
        );
    });

    const vendorShopName = JSON.parse(
        localStorage.getItem("currentUser") || "{}"
    ).shopName || currentUser?.shopName || "";

    const vendorOrders = orders.map(function(order) {

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

    const totalRevenue = vendorOrders.reduce(function(total, order) {
        return total + order.items.reduce(function(orderTotal, item) {
            return orderTotal + (Number(item.price) * Number(item.quantity || 1));
        }, 0);
    }, 0);

    const productsSold = vendorOrders.reduce(function(total, order) {
        return total + order.items.reduce(function(orderTotal, item) {
            return orderTotal + Number(item.quantity || 1);
        }, 0);
    }, 0);

const averageOrderValue = totalOrders > 0
    ? totalRevenue / totalOrders
    : 0;


    const salesHistory = vendorOrders.map(function(order) {

    const orderRevenue = order.items.reduce(function(total, item) {
        return total + (
            Number(item.price) * Number(item.quantity || 1)
        );
    }, 0);

    return {
        ...order,
        orderRevenue: orderRevenue
    };
}); 

    return (
        <div className="vendor-sales-page">

            <div className="vendor-orders-header">
                <div>
                    <h2>Sales Overview</h2>
                    <p>Track your shop sales and revenue.</p>
                </div>
            </div>

            <div className="vendor-stats">

                <div className="vendor-stat-card">
                    <p>Total Revenue</p>
                    <h3>AFN {totalRevenue.toLocaleString()}</h3>
                </div>

                <div className="vendor-stat-card">
                    <p>Total Orders</p>
                    <h3>{totalOrders}</h3>
                </div>

                <div className="vendor-stat-card">
                    <p>Products Sold</p>
                    <h3>{productsSold}</h3>
                </div>

                <div className="vendor-stat-card">
                    <p>Average Order Value</p>
                    <h3>AFN {Math.round(averageOrderValue).toLocaleString()}</h3>
                </div>

            </div>


            <div className="vendor-sales-history">

    <h3>Sales History</h3>

    {salesHistory.length === 0 ? (

        <p className="no-orders">
            No sales available yet.
        </p>

    ) : (

        <div className="sales-table-wrapper">

            <table className="sales-table">

                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Items</th>
                        <th>Revenue</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>

                    {salesHistory.map(function(order) {

                        return (
                            <tr key={order.id}>

                                <td>#{order.id}</td>

                                <td>{order.customerName}</td>

                                <td>
                                    {new Date(order.date).toLocaleDateString()}
                                </td>

                                <td>
                                    {order.items.reduce(function(total, item) {
                                        return total + Number(item.quantity || 1);
                                    }, 0)}
                                </td>

                                <td>
                                    AFN {order.orderRevenue.toLocaleString()}
                                </td>

                                <td>
                                    <span className="vendor-order-status">
                                        {order.status}
                                    </span>
                                </td>

                            </tr>
                        );
                    })}

                </tbody>

            </table>

        </div>
    )}

</div>

        </div>
    );
}

export default VendorSales;
