
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Admin.css";

function AdminOrders() {

    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    // Load Orders
    useEffect(() => {

        function loadOrders() {
            const savedOrders = JSON.parse(
                localStorage.getItem("orders")
            ) || [];

            setOrders(savedOrders);
        }

        loadOrders();

        window.addEventListener("ordersUpdated", loadOrders);

        return () => {
            window.removeEventListener("ordersUpdated", loadOrders);
        };

    }, []);


    // Update Order Status
    function handleStatusChange(orderId, newStatus) {

        const updatedOrders = orders.map((order) => {

            if (order.id === orderId) {
                return {
                    ...order,
                    status: newStatus
                };
            }

            return order;
        });

        setOrders(updatedOrders);

        localStorage.setItem(
            "orders",
            JSON.stringify(updatedOrders)
        );

        window.dispatchEvent(new Event("ordersUpdated"));

        if (selectedOrder?.id === orderId) {
            setSelectedOrder({
                ...selectedOrder,
                status: newStatus
            });
        }
    }


    // Order Statistics
    const processingOrders = orders.filter(
        order => order.status === "Processing"
    ).length;

    const shippedOrders = orders.filter(
        order => order.status === "Shipped"
    ).length;

    const deliveredOrders = orders.filter(
        order => order.status === "Delivered"
    ).length;


    // Search Orders
    const filteredOrders = orders.filter(order =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (

        <div className="admin-container">

            <input type="checkbox" id="menu-toggle" />

            <label htmlFor="menu-toggle" className="menu-button">
                ☰
            </label>
            <div className="admin-sidebar" id="adminSidebar">

                <div className="sidebar-header">

                    <div className="logo">
                        LC
                    </div>

                    <div className="site-name">
                        <h2>LADY CLOSET</h2>
                    </div>

                </div>


                <nav className="sidebar-menu">

                    <ul>
                        <li><Link to="/admin">Dashboard</Link></li>
                        <li><Link to="/admin/shops">Shops</Link></li>
                        <li><Link to="/admin/users">Users</Link></li>
                        <li><Link to="/admin/orders">Orders</Link></li>
                        <li><Link to="/admin/categories">Categories</Link></li>
                        <li><Link to="/admin/commission">Commission</Link></li>
                        <li><Link to="/admin/reviews">Reviews</Link></li>
                        <li><Link to="/admin/settings">Settings</Link></li>
                    </ul>

                </nav>


                <div className="admin-profile">

                    <div className="profile-image"></div>

                    <div className="admin-info">
                        <h4>Administrator</h4>
                        <span>Admin</span>
                    </div>

                </div>

            </div>


            {/* Main Content */}
            <div className="main-content">


                {/* Header */}
                <div className="Dashboard-header">

                    <div className="title">
                        <h2>Order Management</h2>
                        <p>Manage and track customer orders</p>
                    </div>

                    <div className="header-action">

                        <input
                            type="text"
                            placeholder="Search order ID"
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(e.target.value)
                            }
                        />

                    </div>

                </div>


                {/* Order Statistics */}
                <div className="stat-container">

                    <div className="stat-card">
                        <p>Total Orders</p>
                        <h2>{orders.length}</h2>
                        <span>All customer orders</span>
                    </div>

                    <div className="stat-card">
                        <p>Processing</p>
                        <h2>{processingOrders}</h2>
                        <span>Waiting for preparation</span>
                    </div>

                    <div className="stat-card">
                        <p>Shipped</p>
                        <h2>{shippedOrders}</h2>
                        <span>Orders on the way</span>
                    </div>

                    <div className="stat-card">
                        <p>Delivered</p>
                        <h2>{deliveredOrders}</h2>
                        <span>Successfully delivered</span>
                    </div>

                </div>


                {/* Orders List */}
                <div className="queue-background">

                    <h3>Recent Orders</h3>

                    <div className="admin-orders-container">

                        {filteredOrders.length === 0 ? (

                            <p>No orders found.</p>

                        ) : (

                            filteredOrders.map((order) => (

                                <div
                                    className="admin-order-card"
                                    key={order.id}
                                >

                                    <div className="admin-order-header">

                                        <div>
                                            <h3>{order.id}</h3>

                                            <p>
                                                {new Date(order.date).toLocaleDateString()}
                                            </p>
                                        </div>

                                        <span className="order-status">
                                            {order.status}
                                        </span>

                                    </div>


                                    <div className="admin-order-info">

                                        <p>
                                            <strong>Shops:</strong>{" "}
                                            {order.shops?.join(", ") || "N/A"}
                                        </p>

                                        <p>
                                            <strong>Products:</strong>{" "}
                                            {order.items?.length || 0}
                                        </p>

                                        <p>
                                            <strong>Total:</strong>{" "}
                                            AFN {Number(order.total).toLocaleString()}
                                        </p>

                                    </div>


                                    <div className="admin-order-actions">

                                        <select
                                            value={order.status || "Processing"}
                                            onChange={(e) =>
                                                handleStatusChange(
                                                    order.id,
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="Processing">
                                                Processing
                                            </option>

                                            <option value="Packed">
                                                Packed
                                            </option>

                                            <option value="Shipped">
                                                Shipped
                                            </option>

                                            <option value="Delivered">
                                                Delivered
                                            </option>

                                        </select>


                                        <button
                                            type="button"
                                            onClick={() =>
                                                setSelectedOrder(order)
                                            }
                                        >
                                            View Details
                                        </button>

                                    </div>

                                </div>

                            ))

                        )}

                    </div>

                </div>


                {/* Order Details */}
                {selectedOrder && (

                    <div className="order-details">

                        <div className="details-header">

                            <h3>Order Details</h3>

                            <button
                                type="button"
                                onClick={() => setSelectedOrder(null)}
                            >
                                Close
                            </button>

                        </div>


                        <p>
                            <strong>Order ID:</strong>{" "}
                            {selectedOrder.id}
                        </p>

                        <p>
                            <strong>Date:</strong>{" "}
                            {new Date(selectedOrder.date).toLocaleDateString()}
                        </p>

                        <p>
                            <strong>Status:</strong>{" "}
                            {selectedOrder.status}
                        </p>

                        <p>
                            <strong>Payment:</strong>{" "}
                            {selectedOrder.paymentMethod}
                        </p>

                        <p>
                            <strong>Shops:</strong>{" "}
                            {selectedOrder.shops?.join(", ")}
                        </p>


                        <h3>Ordered Products</h3>

                        <div className="details-products">

                            {selectedOrder.items?.map((product, index) => (

                                <div
                                    className="details-product"
                                    key={product.id ?? index}
                                >

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />

                                    <div>
                                        <h4>{product.name}</h4>

                                        <p>
                                            Quantity: {product.quantity || 1}
                                        </p>

                                        <p>
                                            AFN {(Number(product.price) *
                                                (Number(product.quantity) || 1)
                                            ).toLocaleString()}
                                        </p>
                                    </div>

                                </div>

                            ))}

                        </div>


                        <div className="details-total">

                            <p>
                                Subtotal: AFN{" "}
                                {Number(selectedOrder.subtotal).toLocaleString()}
                            </p>

                            <p>
                                Delivery Fee: AFN{" "}
                                {Number(selectedOrder.deliveryFee).toLocaleString()}
                            </p>

                            <h3>
                                Total: AFN{" "}
                                {Number(selectedOrder.total).toLocaleString()}
                            </h3>

                        </div>

                    </div>

                )}

            </div>

        </div>

    );

}

export default AdminOrders;
