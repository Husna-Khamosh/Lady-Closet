import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../Data";
import "../CSS/sellers.css";

function Sellers() {
    

    const [search, setSearch] = useState("");

    const sellers = [...new Set(
        products.map(function(product) {
            return product.shop;
        })
    )];

    const filteredSellers = sellers.filter(function(shopName) {
    return shopName.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="sellers-page">

            <h2>Discover Our Shops</h2>

            <p>
                Explore different stores and find your favorite brands.
            </p>
            <div className="sellers-search">
                <span className="search-icon">⌕</span>

                <input
                    type="text"
                    placeholder="Search for your favorite shop..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </div>

            <div className="sellers-container">
                {filteredSellers.length > 0 ? (
                    filteredSellers.map(function(shopName) {
                        const shopProducts = products.filter(function(product) {
                            return product.shop === shopName;
                        });

                        return (

                        <div className="seller-card" key={shopName}>

                            <div className="seller-card-logo">
                                {shopName.substring(0, 2).toUpperCase()}
                            </div>

                            <h3>{shopName}</h3>

                            <p>
                                {shopProducts.length} Products
                            </p>

                            <Link to={`/seller/${encodeURIComponent(shopName)}`}>
                                View Shop
                            </Link>

                        </div>

                    );  
                    })
                ) : (
                    <div className="no-sellers-found">
                        <h3>No Shops Found!</h3>
                        <p>We couldn't find any shop matching your search.</p>
                    </div>
                )}



            
                

            </div>  

        </div>
    );
}

export default Sellers;