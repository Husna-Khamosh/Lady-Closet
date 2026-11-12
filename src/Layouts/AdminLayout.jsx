
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

function AdminLayout() {

    const [pendingVendorCount, setPendingVendorCount] = useState(0);

    useEffect(function() {
    function loadPendingVendors() {
        const savedUsers = JSON.parse(
            localStorage.getItem("users") || "[]"
        );

        const pendingVendors = savedUsers.filter(function(user) {
            return (
                user.role === "vendor" &&
                user.vendorStatus === "pending"
            );
        });

        setPendingVendorCount(pendingVendors.length);
    }

    loadPendingVendors();

    window.addEventListener("storage", loadPendingVendors);
    window.addEventListener("vendorsUpdated", loadPendingVendors);

    return function() {
        window.removeEventListener("storage", loadPendingVendors);
        window.removeEventListener("vendorsUpdated", loadPendingVendors);
    };
}, []);

    return (
        <div className="admin-layout">

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
                           <Link to="/admin/vendorsReview">
                               Vendor Applications
                               <span className="pending-count">
                                   {pendingVendorCount}
                               </span>
                           </Link>
                           <Link to="/admin/customers">Customers</Link>
                           <Link to="/admin/categories">Categories</Link>
                           <Link to="/admin/commission">Commission</Link>
                           <Link to="/admin/reviews">Reviews</Link>
                           <Link to="/admin/settings">Settings</Link>
                       </nav>
           
                   </aside>

            <main className="admin-content">
                <Outlet />
            </main>

        </div>
    );
}

export default AdminLayout;
