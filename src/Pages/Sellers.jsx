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

    return (
        <div className="sellers-page">

            <h2>Discover Our Shops</h2>

            <p>
                Explore different stores and find your favorite brands.
            </p>

            <div className="sellers-container">

                {sellers.map(function(shopName) {

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

                })}

            </div>  

        </div>
    );
}

export default Sellers;