import React from "react";
import "../CSS/store.css";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

function YourCart({setMessage}) {
    const { cart, removeItem, updateQuantity } = useCart();
    const navigate = useNavigate();

    const cartCount = cart.reduce(function (total, product) {
    return total + (Number(product.quantity) || 1);
}, 0);

    const vendors = [...new Set(
    cart.map(function (product) {
        return product.shop;
    })
)];

const subtotal = cart.reduce(function (total, product) {
    return total + Number(product.price) * (Number(product.quantity) || 1);
}, 0);

const deliveryFee = vendors.length * 200;

const platformFee = 0;
const discount = 0;

const total = subtotal + deliveryFee + platformFee - discount;

    return(
         <>
        
       
        <div className="yourCart-container">
            <div className="yourCart-left">

                <h3 id="cart-title">Your Cart has {cartCount} items</h3>

                <p className="yourCart-top-p">
                    Each shop ships and is tracked separately.
                    One payment now, one sub order per shop.
                </p>
                    {vendors.map(function (vendor) {
                        const vendorProducts = cart.filter(function (product) {
                            return product.shop === vendor;
                        });

                        const shopTotal = vendorProducts.reduce(function (total, product) {
                            return total + Number(product.price) * (Number(product.quantity) || 1);
                        }, 0);

                        return (
                            <div className="kabul-items" key={vendor}>

                                <div className="yourCart-header">
                                    <div className="your-cart-header-left">
                                        <span className="yourCart-avatar">
                                            {vendor.substring(0, 2).toUpperCase()}
                                        </span>

                                        <div>
                                            <h3>{vendor}</h3>
                                            <p>Ships in 2 days · Kabul</p>
                                        </div>
                                    </div>

                                    <div className="total-amount" id="shop-total">
                                        AFN {shopTotal.toLocaleString()}
                                    </div>
                                </div>

                                <div className="cart-products">
                                    {vendorProducts.map(function (product, index) {
                                        return (
                                            <div
                                                className="cart-product"
                                                key={`${product.id}-${index}`}
                                            >
                                                <img
                                                    className="product-small-image"
                                                    src={product.image}
                                                    alt={product.name}
                                                    
                                                />

                                                <div className="cart-product-info">
                                                    <h4>{product.name}</h4>
                                                    <p>AFN {product.price}</p>
                                                    

                                                    <button
                                                        type="button"
                                                        className="remove-cart-product"
                                                        onClick={() => {
                                                            removeItem(product);
                                                            setMessage(`${product.name} removed from cart!`);
                                                        }}
                                                    >
                                                        Remove
                                                    </button>

                                                    <span>Save for later</span>
                                                </div>
                                                            <div className="quantity">
                                                                <button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        updateQuantity(product, (Number(product.quantity) || 1) - 1);
                                                                    }}
                                                                >
                                                                    −
                                                                </button>
                                                                <span>{product.quantity || 1}</span>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        updateQuantity(product, (Number(product.quantity) || 1) + 1);
                                                                    }}
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                
                                                                                        </div>
                                                                                    );
                                                                                })}
                                                                            </div>

                                                    </div>
                                                );
                                            })}

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
                            <li id="items-label">Items ({cartCount})</li>
                            <li>Shop discounts</li>
                            <li>Delivery ({vendors.length} Shops)</li>
                            <li>Platform Fee</li>
                        </ul>
                    </div>


                    <div className="items-list-right">
                        <ul>
                            <li id="items-price">
                            AFN {subtotal.toLocaleString()}
                            </li>
                            <li>-AFN {discount.toLocaleString()}</li>
                            <li>AFN {deliveryFee.toLocaleString()}</li>
                            <li>AFN 0</li>
                        </ul>
                    </div>
                </div>
                <div className="total-price">
                    <h2>Total</h2>
                    <h3 id="cart-total">AFN {total.toLocaleString()}</h3>
                </div>
                <button className="checkout-btn" onClick={()=> navigate("/checkout")}>
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