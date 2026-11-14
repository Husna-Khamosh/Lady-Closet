import React, { useState, useEffect } from "react";
import "../CSS/store.css";
import { useCart } from "../Context/CartContext";
import { AlignRight } from "lucide-react";
import { useNavigate } from "react-router-dom";



function Checkout({currentUser }) {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();
    const [selectedAddress, setSelectedAddress] = useState("");
    const [discountCode, setDiscountCode] = useState("");
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [newAddress, setNewAddress] = useState({
        title: "",
        name: "",
        address: "",
        phone: ""
    });

    const [formErrors, setFormErrors] = useState({});

    const [addresses, setAddresses] = useState(() => {
    const addressKey = `deliveryAddresses_${currentUser?.email}`;

    const savedAddresses = localStorage.getItem(addressKey);

        if (savedAddresses) {
            return JSON.parse(savedAddresses);
        }

        return [
            
        ];
    });

    useEffect(() => {
    if (!currentUser?.email) return;

    const addressKey = `deliveryAddresses_${currentUser.email}`;

    localStorage.setItem(
        addressKey,
        JSON.stringify(addresses)
    );
}, [addresses, currentUser]);

    // Cart Count
    const cartCount = cart.reduce((total, product) => {
        return total + (Number(product.quantity) || 1);
    }, 0);

    // Vendors
    const vendors = [...new Set(
        cart.map((product) => product.shop)
    )];

    // Subtotal
    const subtotal = cart.reduce((total, product) => {
        return total + Number(product.price) * (Number(product.quantity) || 1);
    }, 0);

    // Delivery Fee
    const deliveryFee = vendors.length * 200;

    const platformFee = 0;
    const discount = 0;

    const total = subtotal + deliveryFee + platformFee - discount;

    // Handle Input Changes
    function handleAddressChange(event) {
        const { name, value } = event.target;

        setNewAddress({
            ...newAddress,
            [name]: value
        });

        setFormErrors({
            ...formErrors,
            [name]: ""
        });
    }

    // Save New Address
    function handleSaveAddress() {
        const errors = {};

        if (!newAddress.title.trim()) {
            errors.title = "Please enter an address title.";
        }

        if (!newAddress.name.trim()) {
            errors.name = "Please enter your full name.";
        }

        if (!newAddress.address.trim()) {
            errors.address = "Please enter your full address.";
        }

        if (!newAddress.phone.trim()) {
            errors.phone = "Please enter your phone number.";
        } else if (!/^\+?[0-9\s-]{7,15}$/.test(newAddress.phone.trim())) {
            errors.phone = "Please enter a valid phone number.";
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        const addressToAdd = {
            id: Date.now(),
            title: newAddress.title.trim(),
            name: newAddress.name.trim(),
            address: newAddress.address.trim(),
            phone: newAddress.phone.trim()
        };

        setAddresses((previousAddresses) => [
            ...previousAddresses,
            addressToAdd
        ]);

        setSelectedAddress(String(addressToAdd.id));

        setNewAddress({
            title: "",
            name: "",
            address: "",
            phone: ""
        });

        setFormErrors({});
        setShowAddressForm(false);
    }

    // Cancel Address Form
    function handleCancelAddress() {
        setShowAddressForm(false);

        setNewAddress({
            title: "",
            name: "",
            address: "",
            phone: ""
        });

        setFormErrors({});
    }

    // Continue from Address to Payment
    const handleContinue = () => {
        if (!selectedAddress) {
            alert("Please select a delivery address.");
            return;
        }

        setCurrentStep(2);
    };

    const handlePaymentContinue =() =>{
        if(!paymentMethod){
            alert("Please select a Payment Method!")
        }
        else{
            setCurrentStep(3);
        }
    }

    function handlePlaceOrder() {
        if (cart.length === 0) {
    alert("Your cart is empty!");
    
    return;
}

    const newOrder = {
        id: "ORD-" + Date.now(),

        date: new Date().toISOString(),
        customerEmail: currentUser?.email,
        customerName: currentUser?.fullName,

        items: cart.map((product) => ({
            ...product,
            quantity: Number(product.quantity) || 1
        })),

        address: selectedAddressInfo,

        paymentMethod: paymentMethod,

        subtotal: subtotal,

        deliveryFee: deliveryFee,

        total: total,

        shops: vendors,

        status: "Processing"
    };

    const savedOrders = JSON.parse(
        localStorage.getItem("orders")
    ) || [];

    const updatedOrders = [
        ...savedOrders,
        newOrder
    ];

    localStorage.setItem(
        "orders",
        JSON.stringify(updatedOrders)
    );
    // clear the cart 
    clearCart();
    alert("Order placed successfully!");
    navigate("/orders");
}


    const selectedAddressInfo = addresses.find(
    (address) => String(address.id) === selectedAddress
);

    return (
        <div className="body-page">

            {/* Payment Progress */}
            <ul className="payment-progress">
                <li><span>1</span> Address</li>
                <li><span>2</span> Payment</li>
                <li><span>3</span> Review</li>
            </ul>

            <div className="payment-container">

                {/* Left Side */}
                <div className="payment-left">

                    {/* Address Step */}
                    {currentStep === 1 && (
                        <>
                            <div className="Delivery-add">
                                <h3>Delivery Address</h3>
                            </div>

                            {/* Saved Addresses */}
                            {addresses.map((address) => (
                                <div className="delivery-add-cart" key={address.id}>
                                    <input
                                        type="radio"
                                        name="deliveryAddress"
                                        value={address.id}
                                        checked={selectedAddress === String(address.id)}
                                        onChange={(event) => {
                                            setSelectedAddress(event.target.value);
                                        }}
                                    />

                                    <div className="address-info">
                                        <h5>
                                            {address.title} - {address.name}
                                        </h5>

                                        <p>
                                            {address.address}. {address.phone}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {/* Add New Address */}
                            <div className="add-new-add">
                                <button
                                    type="button"
                                    onClick={() => setShowAddressForm(true)}
                                >
                                    + Add New Address
                                </button>

                                {showAddressForm && (
                                    <div className="new-address-form">
                                        <h4>Add New Address</h4>

                                        {/* Address Title */}
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder="Address Title (Home, Office...)"
                                            value={newAddress.title}
                                            onChange={handleAddressChange}
                                        />

                                        {formErrors.title && (
                                            <p className="form-error">
                                                {formErrors.title}
                                            </p>
                                        )}

                                       
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={newAddress.name}
                                            onChange={handleAddressChange}
                                        />

                                        {formErrors.name && (
                                            <p className="form-error">
                                                {formErrors.name}
                                            </p>
                                        )}

                                        
                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Full Address"
                                            value={newAddress.address}
                                            onChange={handleAddressChange}
                                        />

                                        {formErrors.address && (
                                            <p className="form-error">
                                                {formErrors.address}
                                            </p>
                                        )}

                                        
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={newAddress.phone}
                                            onChange={handleAddressChange}
                                        />

                                        {formErrors.phone && (
                                            <p className="form-error">
                                                {formErrors.phone}
                                            </p>
                                        )}

                                        
                                        <div className="address-form-buttons">
                                            <button
                                                type="button"
                                                className="save-address-btn"
                                                onClick={handleSaveAddress}
                                            >
                                                Save Address
                                            </button>

                                            <button
                                                type="button"
                                                className="cancel-address-btn"
                                                onClick={handleCancelAddress}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                   
                    {currentStep === 2 && (
                        <div className="payment-method-section">
                            <h3>Payment Method</h3>

                            <p>Please select your payment method.</p>

                            <label>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="cash"
                                    checked={paymentMethod === "cash"}
                                    onChange={()=> setPaymentMethod("cash")}
                                />
                                Cash on Delivery
                            </label>

                            <button
                                type="button"
                                onClick={() => setCurrentStep(1)}
                            >
                                Back to Address
                            </button>
                        </div>
                    )}

                                    
                    {currentStep === 3 && (
                        <div className="review-section">

                            <h3>Review Your Order</h3>

                            
                            <div className="review-card">
                                <h4>Delivery Address</h4>

                                {selectedAddressInfo && (
                                    <>
                                        <p><strong>{selectedAddressInfo.title}</strong></p>
                                        <p>{selectedAddressInfo.name}</p>
                                        <p>{selectedAddressInfo.address}</p>
                                        <p>{selectedAddressInfo.phone}</p>
                                    </>
                                )}

                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(1)}
                                >
                                    Edit Address
                                </button>
                            </div>

                            
                            <div className="review-card">
                                <h4>Payment Method</h4>
                                <p>
                                    {paymentMethod === "cash"
                                        ? "Cash on Delivery"
                                        : "No payment method selected"}
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(2)}
                                >
                                    Edit Payment
                                </button>
                            </div>

                        {/* Products */}
                            <div className="review-card">
                                <h4>Order Items ({cartCount})</h4>

                                {cart.map((product) => (
                                    <div className="review-product" key={product.id}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                        />

                                        <div>
                                            <h5>{product.name}</h5>
                                            <p>Quantity: {product.quantity || 1}</p>
                                            <p>
                                                AFN {(Number(product.price) *
                                                    (Number(product.quantity) || 1)).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    )}
                
                </div>

                
                <div className="payment-right">

                    <h3>Order Summary</h3>

                    {/* Discount Code */}
                    <div className="discount-section">
                        <input
                            type="text"
                            placeholder="Discount Code"
                            value={discountCode}
                            onChange={(event) => {
                                setDiscountCode(event.target.value);
                            }}
                        />

                        <button type="button">
                            Apply
                        </button>
                    </div>

                    
                    <div className="items-list">
                        <div className="items-list-left">
                            <ul>
                                <li>Items ({cartCount})</li>
                                <li>Shop discounts</li>
                                <li>Delivery ({vendors.length} Shops)</li>
                                <li>Platform Fee</li>
                            </ul>
                        </div>

                        <div className="items-list-right">
                            <ul>
                                <li>AFN {subtotal.toLocaleString()}</li>
                                <li>-AFN {discount.toLocaleString()}</li>
                                <li>AFN {deliveryFee.toLocaleString()}</li>
                                <li>AFN {platformFee.toLocaleString()}</li>
                            </ul>
                        </div>
                    </div>

                    
                    <div className="total-price">
                        <h2>Total</h2>
                        <h3>
                            AFN {total.toLocaleString()}
                        </h3>
                    </div>

                    {currentStep !== 3 && (
                    <button
                        type="button"
                        className="checkout-btn"
                        onClick={currentStep === 1 ? handleContinue : handlePaymentContinue}
                    >
                        {currentStep === 1 ? "Continue to Payment" : "Continue to Review"}
                    </button>
                        
                    )}
                    {currentStep === 3 && (
                    <button
                        type="button"
                        className="checkout-btn"
                        onClick={handlePlaceOrder}

                    >
                        Place Order
                    </button>
                )}

                    <p>
                        Cash on delivery Available in Kabul,
                        Herat and Mazar
                    </p>

                </div>

            </div>
        </div>
    );
}

export default Checkout;
