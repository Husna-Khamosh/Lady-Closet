import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Admin.css";
import products from "../Data";



function AdminDashboard() {

    function loadPendingVendors() {
    const savedUsers = JSON.parse(
        localStorage.getItem("users") || "[]"
    );

    const pendingVendors = savedUsers.filter(function(user) {
        return (
            user.role === "vendor" &&
            (user.vendorStatus || "pending") === "pending"
        );
    });
    console.log("Pending vendors:", pendingVendors);
    setPendingVendorCount(pendingVendors.length);
}

    const [pendingVendorCount, setPendingVendorCount] = useState(0);

        useEffect(() => {

            loadPendingVendors();

            window.addEventListener("storage", loadPendingVendors);
            window.addEventListener("focus", loadPendingVendors);
            window.addEventListener("vendorsUpdated", loadPendingVendors);

            return function() {
                window.removeEventListener("storage", loadPendingVendors);
                window.removeEventListener("focus", loadPendingVendors);
                window.removeEventListener("vendorsUpdated", loadPendingVendors);
            };

        }, []);

    return (
    <div className="admin-container">
        <aside className="admin-sidebar">

            <div className="sidebar-header">
                <div className="logo">
                    LC
                </div>
            </div>

            <nav className="sidebar-menu">
                <Link to="/admin">Dashboard</Link>
                <Link to="/admin/orders">Orders</Link>
                <Link to="/admin/shops">Shops</Link>
                <Link to="/admin/vendors">
                    Vendor Applications
                    <span className="pending-count">
                        {pendingVendorCount}
                    </span>
                </Link>
                <Link to="/admin/users">Customers</Link>
                <Link to="/admin/categories">Categories</Link>
                <Link to="/admin/commission">Commission</Link>
                <Link to="/admin/reviews">Reviews</Link>
                <Link to="/admin/settings">Settings</Link>
            </nav>

        </aside>

    
        <main className="main-content">

            <header className="Dashboard-header">
                <div>
                    <h2 className="title">Platform Overview</h2>
                    <p>Welcome back to your admin dashboard.</p>
                </div>
            </header>

            <div className="stat-container">

                <div className="stat-card">
                    <h4>Platform GMV</h4>
                    <h2>AFN 8,562,000</h2>
                    <p>+12% from last month</p>
                </div>

                <div className="stat-card">
                    <h4>Commission Earned</h4>
                    <h2>AFN 1,284,300</h2>
                    <p>15% commission rate</p>
                </div>

                <div className="stat-card">
                    <h4>Active Shops</h4>
                    <h2>1,240</h2>
                    <p>7 pending applications</p>
                </div>

                <div className="stat-card">
                    <h4>Total Orders</h4>
                    <h2>6,318</h2>
                    <p>+11% from last month</p>
                </div>

            </div>


            <div className="charts-container">


                <div className="chart-card">
                    <div className="chart-title">
                        <h3>Sales Overview</h3>
                        <span>Last 7 Days</span>
                    </div>

                    <div className="bar-chart">

                        <div className="bar-item">
                            <div className="bar" style={{ height: "45%" }}></div>
                            <span>Sat</span>
                        </div>

                        <div className="bar-item">
                            <div className="bar" style={{ height: "65%" }}></div>
                            <span>Sun</span>
                        </div>

                        <div className="bar-item">
                            <div className="bar" style={{ height: "50%" }}></div>
                            <span>Mon</span>
                        </div>

                        <div className="bar-item">
                            <div className="bar" style={{ height: "80%" }}></div>
                            <span>Tue</span>
                        </div>

                        <div className="bar-item">
                            <div className="bar" style={{ height: "60%" }}></div>
                            <span>Wed</span>
                        </div>

                        <div className="bar-item">
                            <div className="bar" style={{ height: "90%" }}></div>
                            <span>Thu</span>
                        </div>

                        <div className="bar-item">
                            <div className="bar" style={{ height: "75%" }}></div>
                            <span>Fri</span>
                        </div>

                    </div>
                </div>

               

                <div className="chart-card">

                    <div className="chart-title">
                        <h3>Order Analytics</h3>
                        <span>Last 7 Days</span>
                    </div>

                    <div className="order-line-chart">

                        <svg viewBox="0 0 500 160" preserveAspectRatio="none">

                            <line x1="0" y1="35" x2="500" y2="35" />
                            <line x1="0" y1="75" x2="500" y2="75" />
                            <line x1="0" y1="115" x2="500" y2="115" />

                            <polyline
                                points="10,115 90,85 170,100 250,45 330,70 410,25 490,50"
                            />

                            <circle cx="10" cy="115" r="4" />
                            <circle cx="90" cy="85" r="4" />
                            <circle cx="170" cy="100" r="4" />
                            <circle cx="250" cy="45" r="4" />
                            <circle cx="330" cy="70" r="4" />
                            <circle cx="410" cy="25" r="4" />
                            <circle cx="490" cy="50" r="4" />

                        </svg>

                        <div className="line-chart-days">
                            <span>Sat</span>
                            <span>Sun</span>
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                        </div>

                    </div>

                </div>

            </div>  
                <div className="shops-card">

                    <div className="chart-title">
                        <h3>Our Sellers</h3>
                        <span>All Shops</span>
                    </div>

                    {Object.entries(
                        products.reduce((shops, product) => {

                            const shopName = product.shop;

                            if (!shops[shopName]) {
                                shops[shopName] = 0;
                            }

                            shops[shopName]++;

                            return shops;

                        }, {})
                    ).map(([shopName, productCount]) => (

                        <div className="shop" key={shopName}>

                            <div className="shop-header">

                                <div className="shop-icon">
                                    {shopName.slice(0, 2).toUpperCase()}
                                </div>

                                <div className="shop-name">
                                    <h4>{shopName}</h4>
                                    <p>{productCount} Products</p>
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

        </main>

    </div>
);
}

export default AdminDashboard;