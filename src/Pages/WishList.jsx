import React from "react";
import "../CSS/store.css";

function Wishlist({ wishlist, onRemoveFromWishlist }) {

    return (
        <div className="wishlist-container">

            <h1>My Wishlist</h1>

            <div className="wishlist-carts">

                {wishlist.length === 0 ? (
                    <p>Your wishlist is empty.</p>
                ) : (

                    wishlist.map(function (product) {

                        return (
                            <div className="cart" key={product.id}>

                                <img src={product.image} alt={product.name} />

                                <div className="cart-info">
                                    <h3>{product.name}</h3>
                                    <p>AFN {product.price.toLocaleString()}</p>

                                    <div className="cart-actions">
                                        <button
                                            className="removecart"
                                            onClick={() => onRemoveFromWishlist(product)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>

                            </div>
                        );
                    })

                )}

            </div>

        </div>
    );
}

export default Wishlist;