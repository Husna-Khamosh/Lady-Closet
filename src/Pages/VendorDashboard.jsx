import React from "react";
import "../CSS/VendorDashboard.css";

function VendorDashboard({ currentUser }) {

    return (
        <div className="vendor-dashboard">

            <aside className="vendor-sidebar">

                <div className="vendor-logo">
                    <h2>Lady Closet</h2>
                    <p>Vendor Panel</p>
                </div>

                <nav className="vendor-menu">
                    <a href="/vendor">Overview</a>
                    <a href="/vendor/products">My Products</a>
                    <a href="/vendor/orders">My Orders</a>
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
                        <h3>0</h3>
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