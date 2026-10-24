import React from "react";

function YourCart({ cart }) {
    return(
         <>
        
       
        <div className="yourCart-container">
            <div className="yourCart-left">

                <h3 id="cart-title">Your Cart. 3 items</h3>

                <p className="yourCart-top-p">
                    Each shop ships and is tracked separately.
                    One payment now, one sub order per shop.
                </p>
                <div className="kabul-items">
                    <div className="yourCart-header">
                        <div className="your-cart-header-left">
                            <span className="yourCart-avatar">
                                TN
                            </span>

                            <div>
                                <h3>TechNest Electronics</h3>
                                <p>Ships in 2 days · Kabul</p>
                            </div>
                        </div>
                    </div>
                    <div className="total-amount" id="shop-total">
                        AFN 87,750
                    </div>

                </div>
                
                
                    
                    <div className="cart-products">
                    {cart && cart.length > 0 ? (
                        cart.map(function (product, index) {
                        return (
                            <div className="cart-product"
                            key={`${product.id}-${index}`}
                            >
                            <img
                                src={product.image}
                                alt={product.name}
                                width="100"
                            />

                            <div className="cart-product-info">
                                <h4>{product.name}</h4>
                                <p>AFN {product.price}</p>
                            </div>
                            </div>
                        );
                        })
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                    </div>

                  

            </div>
            <div className="yourCart-right">
                <h3> Order Summary</h3>
                <div className="discount-section">

                    <input type="text" placeholder="Discount Code" />

                    <button>Apply</button>
                </div>
                <div className="items-list">

                    <div className="items-list-left">
                        <ul>
                            <li id="items-label">Items (3)</li>
                            <li>Shop discounts</li>
                            <li>Delivery (2 Shops)</li>
                            <li>Platform Fee</li>
                        </ul>
                    </div>


                    <div className="items-list-right">
                        <ul>
                            <li id="items-price">AFN 97,650</li>
                            <li>-AFN 6,485</li>
                            <li>AFN 400</li>
                            <li>AFN 0</li>
                        </ul>
                    </div>
                </div>
                <div className="total-price">
                    <h2>Total</h2>
                    <h3 id="cart-total">AFN 91,545</h3>
                </div>
                <button className="checkout-btn">
                    CheckOut
                </button>


                <p>
                    Cash on delivery Available in Kabul,
                    Herat and Mazar
                </p>

            </div>

        </div>
        </>

    );
}

export default YourCart;