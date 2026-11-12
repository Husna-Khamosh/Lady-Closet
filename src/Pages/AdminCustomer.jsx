import React, { useState } from "react";

function AdminCustomer() {
    const [openMenu, setOpenMenu] = useState(null);
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const customers = users.filter(function(user) {
        return user.role === "customer";
    });
    console.log("All Users:", users);
    return (
    <div className="admin-container">
        <main className="main-content">

            <header className="Dashboard-header">
                <div>
                    <h2 className="title">Customers</h2>
                    <p>View and manage registered customers.</p>
                </div>
            </header>

            <div className="customers-container">

                {customers.length === 0 ? (
                    <p>No customers found.</p>
                ) : (
                    customers.map(function(user) {
                        return (
                            <div className="customer-card" key={user.id}>

                                <div className="customer-info">

                                    <img
                                        src={user.profileImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAaOG5FIFm-Adry205zQs6kZZGqLoiVRMxEPugqgvyQ&s=10"}
                                        alt="Customer"
                                        className="customer-avatar"
                                    />

                                    <div className="customer-details">
                                        <h3>{user.fullName}</h3>
                                        <p>{user.email}</p>
                                    </div>

                                </div>

                                <div className="customer-role">
                                    Customer
                                </div>
                                <div className="customer-menu">
                                    <button
                                        className="customer-menu-btn"
                                        onClick={function() {
                                            setOpenMenu(
                                                openMenu === user.id ? null : user.id
                                            );
                                        }}
                                    >
                                        ⋮
                                    </button>

                                    {openMenu === user.id && (
                                        <div className="customer-dropdown">

                                            <button>View Details</button>

                                            <button>View Orders</button>

                                            <button>Edit Customer</button>

                                            <button>Suspend Account</button>

                                            <button className="delete-option">
                                                Delete Customer
                                            </button>

                                        </div>
                                    )}      
                                </div>
                            </div>
                        );
                    })
                )}

            </div>

        </main>
    </div>
);
}

export default AdminCustomer;