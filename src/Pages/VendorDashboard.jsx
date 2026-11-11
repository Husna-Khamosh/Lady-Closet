import React, { useState } from "react";
import "../CSS/VendorDashboard.css";
import products from "../Data";
import { Link } from "react-router-dom";

function VendorDashboard({ currentUser }) {
    const [savedProducts, setSavedProducts] = useState(() => {
    return JSON.parse(
        localStorage.getItem("vendorProducts") || "[]"
    );
});
    
    const vendorProducts = savedProducts.filter(function(product) {
    return product.shop === currentUser.shopName;
    });

    if (currentUser.vendorStatus === "pending") {
    return (
        <div className="vendor-pending">
            <h2>Your Shop Application is Under Review</h2>

            <p>
                Your registration has been submitted successfully.
                Our admin team will review your application.
            </p>

            <span>Application Status: Pending</span>
        </div>
    );
}

if (currentUser.vendorStatus === "rejected") {
    return (
        <div className="vendor-rejected">
            <h2>Your Application Was Rejected</h2>

            <p>
                Unfortunately, your shop application was not approved.
                Please contact our support team for more information.
            </p>

            <span>Application Status: Rejected</span>
        </div>
    );
}
    return (
        <div className="vendor-dashboard">

            <aside className="vendor-sidebar">

                <div className="vendor-logo">
                    <h2>Lady Closet</h2>
                    <p>Vendor Panel</p>
                </div>

                <nav className="vendor-menu">
                    <a href="/vendor">Overview</a>
                    <Link to="/vendor/products">My Products</Link>
                    <Link to="/vendor/orders">My Orders</Link>
                    <a href="/vendor/sales">Sales</a>
                    <a href="/vendor/settings">Shop Settings</a>
                </nav>

            </aside>

            <main className="vendor-main">

                <header className="vendor-header">
                    <div>
                        <h2>Vendor Dashboard</h2>
                        <p>Welcome back, {currentUser?.fullName}!</p>
                    </div>
                </header>

                <section className="vendor-stats">

                    <div className="vendor-stat-card">
                        <p>Total Products</p>
                        <h3>{vendorProducts.length}</h3>
                    </div>

                    <div className="vendor-stat-card">
                        <p>Total Orders</p>
                        <h3>0</h3>
                    </div>

                    <div className="vendor-stat-card">
                        <p>Total Sales</p>
                        <h3>AFN 0</h3>
                    </div>

                    <div className="vendor-stat-card">
                        <p>Shop Status</p>
                        <h3>Active</h3>
                    </div>

                </section>

                <section className="vendor-content">
                    <h3>Welcome to Your Shop!</h3>
                    <p>
                        Manage your products, track your orders
                        and monitor your shop performance.
                    </p>
                </section>

            </main>

        </div>
    );
}

export default VendorDashboard;