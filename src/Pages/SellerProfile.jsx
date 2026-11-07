
import React from "react";
import products from "../Data";
import "../CSS/sellers.css";
import { Link, useParams } from "react-router-dom";

function SellerProfile({
    wishlist,
    addToWishlist,
    removeFromWishlist
}) {

    const { shopName } = useParams();

    const sellerProducts = products.filter(function(product) {
        return product.shop === shopName;
    });

    return (
        <div className="seller-page">

            <div className="sellers-header">
                <Link to="/sellers" className="back-to-shops">
                    ← Back to All Shops
                </Link>

                <div className="sellers-header-cover">
                </div>

                <div className="seller-details">

                    <div className="seller-profile">

                        <div className="photo">
                            {shopName.substring(0, 2).toUpperCase()}
                        </div>

                        <div className="seller-name">
                            <h2>{shopName}</h2>

                            <p>
                                Verified Seller | Replies in 2 hours
                            </p>
                        </div>

                    </div>

                    <div className="follow-msg-btn">
                        <button>Follow Shop</button>
                        <button>Message</button>
                    </div>

                </div>

            </div>

            <div className="seller-top-carts">

                <div className="serller-top-cart">
                    <p>Shop Rating</p>
                    <h3>4.7 / 5</h3>
                </div>

                <div className="serller-top-cart">
                    <p>Total Products</p>
                    <h3>{sellerProducts.length}</h3>
                </div>

                <div className="serller-top-cart">
                    <p>Total Sales</p>
                    <h3>1,250</h3>
                </div>

                <div className="serller-top-cart">
                    <p>Followers</p>
                    <h3>850</h3>
                </div>

            </div>

            <div className="seller-menu">

                <ul>
                    <li>All Products</li>
                    <li>Deals</li>
                    <li>Reviews</li>
                    <li>About</li>
                </ul>

            </div>

            <div className="seller-products">

                {sellerProducts.map(function(product) {

                    const isFavorite = wishlist.some(function(item) {
                        return item.id === product.id;
                    });

                    return (
                        <div
                            className="seller-product-cart"
                            key={product.id}
                        >

                            <div className="product-image">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                />

                                <button
                                    className="wishlist-btn"
                                    onClick={function() {

                                        if (isFavorite) {
                                            removeFromWishlist(product);
                                        } else {
                                            addToWishlist(product);
                                        }

                                    }}
                                >
                                    {isFavorite ? "♥" : "♡"}
                                </button>

                            </div>

                            <h5>{product.shop}</h5>

                            <h4>{product.name}</h4>

                            <div className="rating">
                                ⭐ {product.rating}
                            </div>

                            <div className="price-row">
                                <strong>
                                    AFN {product.price.toLocaleString()}
                                </strong>
                            </div>

                        </div>
                    );

                })}

            </div>

        </div>
    );
}

export default SellerProfile;
