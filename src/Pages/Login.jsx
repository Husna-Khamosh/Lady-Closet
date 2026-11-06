import React, { useState } from "react";
import "../CSS/Login.css";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login({onLogin}) {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});   
    const [successMessage, setSuccessMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    // Check Email
    if (!email.trim()) {
        newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Please enter a valid email address.";
    }

    // Check Password
    if (!password) {
        newErrors.password = "Password is required.";
    } else if (password.length < 8) {
        newErrors.password = "Password must be at least 8 characters.";
    }

    setErrors(newErrors);

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {

    const savedUsers = JSON.parse(
        localStorage.getItem("users")
    ) || [];

    const currentUser = savedUsers.find(function (user) {
    return (
        user.email.trim().toLowerCase() === email.trim().toLowerCase() &&
        user.password === password
    );
});

    if (currentUser) {
        onLogin(currentUser);
        navigate("/");


    } else {

        setErrors({
            email: "Invalid email or password."
        });

        setSuccessMessage("");
    }

} else {
    setSuccessMessage("");
}
    }
    return (
        <div className="login-page">

            <div className="store-container">

                {/* Left Side */}
                <div className="left-side">

                    <div className="logo">
                        <img src="" alt="LOGO" />
                        <h5>Husna Khamosh</h5>
                    </div>

                    <div className="hero-content">
                        <h1>Lady Closet</h1>

                        <p>
                            Discover your favorite fashion items
                            and enjoy shopping with us.
                        </p>
                    </div>

                </div>

                {/* Right Side */}
                <div className="right-side">

                    <form className="login-form" onSubmit={handleSubmit}>

                        <div className="login-header">
                            <h2>Welcome Back!</h2>
                            <p>Sign In to Continue Shopping!</p>
                        </div>

                        <div className="login-field">

                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                
                            />
                            {errors.email && <p className="error-message">{errors.email}</p>}

                            <label>Password</label>
                            <div className="password-input">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
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

                        <div className="login-options">
                            <label>
                                <input type="checkbox" />
                                Remember me
                            </label>

                            <a href="#">Forgot Password?</a>
                        </div>

                        <button type="submit" className="sign-btn">
                            Sign In
                        </button>
                        {successMessage && (
                            <p className="success-message" style={{ color: "green", backgroundColor: "#e8f5ed", padding: "12px", borderRadius: "8px" }}>{successMessage}</p>
                        )}

                        <div className="divider">
                            <span>OR</span>
                        </div>

                        <button type="button" className="log-google">
                            Continue with Google
                        </button>

                        

                        <div className="Sign-Up">
                            <p>
                                Don't Have an Account?
                                <a href="/register"> Create Account</a>
                            </p>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Login;