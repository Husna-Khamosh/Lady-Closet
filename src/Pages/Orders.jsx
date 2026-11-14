
import React, { useState, useEffect } from "react";
import "../CSS/store.css";

function MyOrders({currentUser }) {

    const [orders, setOrders] = useState([]);

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

}, []);

const userOrders = orders.filter((order) => {
    return (
        order.customerEmail?.toLowerCase() ===
        currentUser?.email?.toLowerCase()
    );
});

const orderSteps = [
    "Processing",
    "Packed",
    "Shipped",
    "Delivered"
];
    return (
        <div className="body-page">

            <h2>My Orders</h2>

            <div className="orders-container">

                {userOrders.length === 0 ? (

                    <p>You haven't placed any orders yet.</p>

                ) : (

                    userOrders.map((order)  => (

                        <div className="order-card" key={order.id}>

                            {/* Order Information */}
                            <div className="order-info">

                                <h3>{order.id}</h3>

                                <p>
                                    Date: {new Date(order.date).toLocaleDateString()}
                                </p>

                                <p>Status: {order.status}</p>

                                <p>
                                    Total: AFN {Number(order.total).toLocaleString()}
                                </p>

                                <p>
                                    Shops: {order.shops?.join(", ")}
                                </p>

                            </div>


                          
                            <div className="order-items">

                                {order.items?.map((product, index) => (

                                    <div
                                        className="order-item"
                                        key={`${order.id}-${product.id ?? index}`}
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


                            <div className="order-progress">

                                {orderSteps.map((step, index) => {

                                    const currentStatusIndex = orderSteps.indexOf(order.status);

                                    return (
                                        <div
                                            className={`progress-step ${
                                                index <= currentStatusIndex ? "active" : ""
                                            }`}
                                            key={step}
                                        >

                                            <span>{index + 1}</span>

                                            <p>
                                                {step === "Processing" ? "Placed" : step}
                                            </p>

                                        </div>
                                    );

                                })}

                            </div>

                        </div>

                    ))

                )}

            </div>

        </div>
    );
}

export default MyOrders;
