import React from "react";
import {
    LayoutDashboard,
    UserRound,
    Package,
    MapPin,
    Heart,
    Settings
} from "lucide-react";

function CustomerSidebar({ activeTab, setActiveTab }) {

    return (
        <aside className="customer-sidebar">

            <h3>My Account</h3>

            <button
                className={activeTab === "overview" ? "active" : ""}
                onClick={() => setActiveTab("overview")}
            >
                <LayoutDashboard size={18} />
                Overview
            </button>

            <button onClick={() => setActiveTab("profile")}>
                <UserRound size={18} />
                My Profile
            </button>

            <button onClick={() => setActiveTab("orders")}>
                <Package size={18} />
                My Orders
            </button>

            <button onClick={() => setActiveTab("addresses")}>
                <MapPin size={18} />
                My Addresses
            </button>

            <button onClick={() => setActiveTab("wishlist")}>
                <Heart size={18} />
                My Wishlist
            </button>

            <button onClick={() => setActiveTab("settings")}>
                <Settings size={18} />
                Settings
            </button>

        </aside>
    );
}

export default CustomerSidebar;