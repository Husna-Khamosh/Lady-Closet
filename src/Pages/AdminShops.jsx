import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Admin.css";
import products from "../Data";

function AdminShops() {

    const totalShops = new Set(
    products.map(product => product.shop)
).size;

const totalProducts = products.length;

const totalCategories = new Set(
    products.map(product => product.category)
).size;

const averageProducts = totalShops > 0
    ? Math.round(totalProducts / totalShops)
    : 0;


const shops = Object.values(

    products.reduce((allShops, product) => {

        const shopName = product.shop;

        if (!allShops[shopName]) {
            allShops[shopName] = {
                name: shopName,
                products: 0,
                categories: []
            };
        }

        allShops[shopName].products++;

        if (!allShops[shopName].categories.includes(product.category)) {
            allShops[shopName].categories.push(product.category);
        }

        return allShops;

    }, {})

);


const [selectedShop, setSelectedShop] = useState(null);

    return (
    <div className="admin-container">

        <aside className="admin-sidebar">

            <div className="sidebar-header">
                <div className="logo">
                    LS
                </div>
            </div>

            <nav className="sidebar-menu">
                <Link to="/admin">Dashboard</Link>
                <Link to="/admin/shops">Shops</Link>
                <Link to="/admin/customers">Customers</Link>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/orders">Orders</Link>
                <Link to="/admin/categories">Categories</Link>
                <Link to="/admin/commission">Commission</Link>
                <Link to="/admin/reviews">Reviews</Link>
                <Link to="/admin/settings">Settings</Link>
            </nav>

        </aside>


        <main className="main-content">

            <header className="Dashboard-header">

                <div>
                    <h2 className="title">Shops Management</h2>
                    <p>Manage and monitor all registered shops.</p>
                </div>

                <div className="header-action">
                    <button>Export Report</button>
                </div>

            </header>


            <div className="stat-container">

                <div className="stat-card">
                    <h4>Total Shops</h4>
                    <h2>{totalShops}</h2>
                    <p>Registered shops</p>
                </div>

                <div className="stat-card">
                    <h4>Total Products</h4>
                    <h2>{totalProducts}</h2>
                    <p>Products across all shops</p>
                </div>

                <div className="stat-card">
                    <h4>Categories</h4>
                    <h2>{totalCategories}</h2>
                    <p>Available categories</p>
                </div>

                <div className="stat-card">
                    <h4>Average Products</h4>
                    <h2>{averageProducts}</h2>
                    <p>Products per shop</p>
                </div>

            </div>

            <div className="shops-table-container">

                    <div className="shops-table-header">
                        <h3>All Shops</h3>
                        <span>{shops.length} Shops Registered</span>
                    </div>

                    <div className="table-responsive">

                        <table className="shops-table">

                            <thead>
                                <tr>
                                    <th>Shop Name</th>
                                    <th>Products</th>
                                    <th>Categories</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {shops.map((shop, index) => (

                                    <tr key={shop.name}>

                                        <td>
                                            <div className="shop-table-name">
                                                <div className="shop-icon">
                                                    {shop.name.slice(0, 2).toUpperCase()}
                                                </div>

                                                <span>{shop.name}</span>
                                            </div>
                                        </td>

                                        <td>{shop.products}</td>

                                        <td>
                                            {shop.categories.join(", ")}
                                        </td>

                                        <td>
                                            <button className="view-shop-btn"
                                                    onClick={() => setSelectedShop(shop)}
                                            >
                                                View Details
                                            </button>
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

                                {selectedShop && (

                    <div className="shop-details-overlay">

                        <div className="shop-details-modal">

                            <div className="shop-details-header">
                                <h3>Shop Details</h3>

                                <button
                                    onClick={() => setSelectedShop(null)}
                                >
                                    ×
                                </button>
                            </div>

                            <div className="shop-details-content">

                                <div className="shop-icon">
                                    {selectedShop.name.slice(0, 2).toUpperCase()}
                                </div>

                                <h3>{selectedShop.name}</h3>

                                <p>
                                    Total Products: {selectedShop.products}
                                </p>

                                <p>
                                    Categories: {selectedShop.categories.join(", ")}
                                </p>

                            </div>

                        </div>

                    </div>

                )}
        </main>

    </div>
);

}

export default AdminShops;