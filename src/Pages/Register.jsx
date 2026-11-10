
import React, { useState } from "react";
import "../CSS/register.css";
import { Eye, EyeOff } from "lucide-react";

function Register() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


{/*بخش راجستر کردن ویندور */}
    const [accountType, setAccountType] = useState("customer");
    const [shopName, setShopName] = useState("");
    const [shopDescription, setShopDescription] = useState("");
    const [phone, setPhone] = useState("");
    const [businessAddress, setBusinessAddress] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {};
        if (!fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        }

        if (!email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!password) {
            newErrors.password = "Password is required.";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters.";
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password.";
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        if (!acceptedTerms) {
            newErrors.terms = "Please accept the Terms & Conditions.";
        }

        if (accountType === "vendor") {

        if (!shopName.trim()) {
            newErrors.shopName = "Shop name is required.";
        }

        if (!shopDescription.trim()) {
            newErrors.shopDescription = "Shop description is required.";
        }

        if (!phone.trim()) {
            newErrors.phone = "Contact number is required.";
        }

        if (!businessAddress.trim()) {
            newErrors.businessAddress = "Business address is required.";
        }
    }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {

            const savedUsers = JSON.parse(
                localStorage.getItem("users")
            ) || [];

            const userExists = savedUsers.some(function (user) {
                return user.email.toLowerCase() === email.trim().toLowerCase();
            });

            if (userExists) {
                setErrors({
                    email: "This email is already registered."
                });

                setSuccessMessage("");
                return;
            }

            const newUser = {
                fullName: fullName.trim(),
                email: email.trim().toLowerCase(),
                password: password,
                profileImage: "",
                role: accountType,

                ...(accountType === "vendor" && {
                    shopName: shopName.trim(),
                    shopDescription: shopDescription.trim(),
                    phone: phone.trim(),
                    businessAddress: businessAddress.trim(),
                    vendorStatus: "pending"
                })
            };

            const updatedUsers = [...savedUsers, newUser];

            localStorage.setItem("users", JSON.stringify(updatedUsers));

            setSuccessMessage("Your account has been created successfully!");

        } else {
            setSuccessMessage("");
        }
            };

    return (
        <div className="register-page">

            <div className="store-container">

                {/* Left Side */}
                <div className="left-side">

                    <div className="logo">
                        <img src="" alt="LOGO" />
                        <h5>Lady Closet</h5>
                    </div>

                    <div className="hero-content">
                        <h1>Join Lady Closet</h1>

                        <p>
                            Create your account and discover
                            your favorite fashion collection.
                        </p>
                    </div>

                </div>

                {/* Right Side */}
                <div className="right-side">

                    <form className="register-form" onSubmit={handleSubmit}>

                        <div className="register-header">
                            <h2>Create Account</h2>
                            <p>Sign Up to Start Shopping!</p>
                        </div>

                        <div className="account-type-selection">
                            <label>Choose Account Type</label>
                            <div className="account-type-options">
                                <button
                                    type="button"
                                    className={accountType === "customer" ? "active" : ""}
                                    onClick={() => setAccountType("customer")}
                                >
                                    <span>Customer</span>
                                    <small>Shop your favorite products</small>
                                </button>
                                <button
                                    type="button"
                                    className={accountType === "vendor" ? "active" : ""}
                                    onClick={() => setAccountType("vendor")}
                                >
                                    <span>Vendor</span>
                                    <small>Create and manage your shop</small>
                                </button>
                            </div>
                        </div>
                        {successMessage && (
                            <p className="success-message">{successMessage}</p>
                        )}

                        <div className="register-fields">

                            {/* Full Name */}
                            <div className="register-input">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={fullName}
                                    onChange={(event) => setFullName(event.target.value)}
                                />
                                {errors.fullName && (
                                    <p className="error-message">{errors.fullName}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="register-input">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                {errors.email && (
                                    <p className="error-message">{errors.email}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div className="register-input">
                                <label>Password</label>

                                <div className="password-input">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Create a password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                                    </button>
                                </div>

                                {errors.password && (
                                    <p className="error-message">{errors.password}</p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div className="register-input">
                                <label>Confirm Password</label>

                                <div className="password-input">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm your password"
                                        value={confirmPassword}
                                        onChange={(event) => setConfirmPassword(event.target.value)}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                                    </button>
                                </div>

                                {errors.confirmPassword && (
                                    <p className="error-message">{errors.confirmPassword}</p>
                                )}
                            </div>

                            {accountType === "vendor" && (
                                <div className="vendor-register-fields">

                                    <div className="register-input">
                                        <label>Shop Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your shop name"
                                            value={shopName}
                                            onChange={(event) => setShopName(event.target.value)}
                                        />
                                        {errors.shopName && (
                                            <p className="error-message">{errors.shopName}</p>
                                        )}
                                    </div>

                                    <div className="register-input">
                                        <label>Shop Description</label>
                                        <textarea
                                            placeholder="Describe your shop..."
                                            value={shopDescription}
                                            onChange={(event) => setShopDescription(event.target.value)}
                                        />
                                        {errors.shopDescription && (
                                            <p className="error-message">{errors.shopDescription}</p>
                                        )}
                                    </div>

                                    <div className="register-input">
                                        <label>Contact Number</label>
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            value={phone}
                                            onChange={(event) => setPhone(event.target.value)}
                                        />
                                        {errors.phone && (
                                            <p className="error-message">{errors.phone}</p>
                                        )}
                                    </div>

                                    <div className="register-input">
                                        <label>Business Address</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your business address"
                                            value={businessAddress}
                                            onChange={(event) => setBusinessAddress(event.target.value)}
                                        />
                                        {errors.businessAddress && (
                                            <p className="error-message">{errors.businessAddress}</p>
                                        )}
                                    </div>

                                </div>
                            )}

                        </div>

                        <div className="register-terms">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={acceptedTerms}
                                    onChange={(event) => setAcceptedTerms(event.target.checked)}
                                />
                                I agree to the Terms & Conditions
                            </label>

                            {errors.terms && (
                                <p className="error-message">{errors.terms}</p>
                            )}
                        </div>

                        <button type="submit" className="register-btn">
                            Create Account
                        </button>

                        <div className="register-footer">
                            <p>
                                Already have an account?
                                <a href="/login"> Sign In</a>
                            </p>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Register;
