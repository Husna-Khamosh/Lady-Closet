import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Admin.css";

function AdminVendors() {

    const [vendors, setVendors] = useState([]);

    useEffect(() => {

        const savedUsers = JSON.parse(
            localStorage.getItem("users")
        ) || [];

        const vendorApplications = savedUsers.filter(function(user) {
            return user.role === "vendor";
        });

        setVendors(vendorApplications);

    }, []);


    function updateVendorStatus(vendorEmail, newStatus) {

        const savedUsers = JSON.parse(
            localStorage.getItem("users")
        ) || [];

        const updatedUsers = savedUsers.map(function(user) {

            if (user.email === vendorEmail) {
                return {
                    ...user,
                    vendorStatus: newStatus
                };
            }

            return user;

        });

        localStorage.setItem(
            "users",
            JSON.stringify(updatedUsers)
        );

        window.dispatchEvent(new Event("vendorsUpdated"));

        const updatedVendors = updatedUsers.filter(function(user) {
            return user.role === "vendor";
        });

        setVendors(updatedVendors);
    }


    return (
        <div className="admin-container">

            <main className="main-content">

                <header className="Dashboard-header">
                    <div>
                        <h2 className="title">Vendor Applications</h2>
                        <p>Review and manage vendor registration requests.</p>
                    </div>
                </header>


                <div className="vendor-applications-container">

                    {vendors.length === 0 ? (

                        <p>No vendor applications found.</p>

                    ) : (

                        vendors.map((vendor) => (

                        <div className="vendor-application-card" key={vendor.email}>

                            <h3>{vendor.shopName}</h3>

                            <p>Owner: {vendor.fullName}</p>

                            <p>Email: {vendor.email}</p>

                            <p>Phone: {vendor.phone}</p>

                            <p>Address: {vendor.businessAddress}</p>

                            <p>Description: {vendor.shopDescription}</p>

                            <p>
                                Status: {vendor.vendorStatus || "pending"}
                            </p>

                            {vendor.vendorStatus === "pending" && (

                                <div className="vendor-actions">

                                    <button
                                        onClick={() => updateVendorStatus(
                                            vendor.email,
                                            "approved"
                                        )}
                                    >
                                        Approve
                                    </button>

                                    <button
                                        onClick={() => updateVendorStatus(
                                            vendor.email,
                                            "rejected"
                                        )}
                                    >
                                        Reject
                                    </button>

                                </div>

                            )}

                        </div>

                    ))

                    )}

                </div>

            </main>

        </div>
    );
}

export default AdminVendors;