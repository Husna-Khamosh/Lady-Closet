import React from "react";
import "../CSS/store.css";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { Store } from "lucide-react";


function Header({ onCategoryChange, showCategories = true, isLoggedIn, onLogout, currentUser }) {
  const { cart } = useCart();
  const cartCount = cart.reduce(function(total, item) {
    return total + (Number(item.quantity) || 1);
}, 0);
  return (
    <header className="store-header">
      <div className="left-side-header">
        <div className="left-side-header-top">
          <img
            src="/images/woman.png"
            alt="Husna Khamosh"
          />

          <span>
              {isLoggedIn && currentUser
                  ? currentUser.fullName
                  : "Guest"}
          </span>

          <input
            type="search"
            placeholder="Filter the products you are looking for"
          />
        </div>

        {showCategories && (
        <nav className="left-side-header-bottom">
          <ul>
            <li>

              <Link to="/category/All Products">
                 All Products
              </Link>
              
            </li>

            <li>
              <Link to="/category/Clothing">
                  Clothing
              </Link>
              
            </li>

            <li>
                <Link to="/category/Footwear">
                  Footwear
                </Link>
            </li>

            <li>

                <Link to="/category/Pants & Jeans">
                  FootwearPants &amp; Jeans
                </Link>
            </li>

            <li>
                <Link to="/category/Sneakers">
                  Sneakers
                </Link>
            </li>

            <li>
                <Link to="/category/Bags">
                  Bags
                </Link>
            </li>

            <li>
                <Link to="/category/Scarves &amp; Shawls">
                  Scarves &amp; Shawls
                </Link>
            </li>

            <li>
                <Link to="/category/Accessories">
                  Accessories
                </Link>
            
            </li>
          </ul>
        </nav>
        )}


      </div>

      <div className="center-header">
        <Link to="/sellers" className="shops-link">
            <Store size={21} strokeWidth={2} />
            <span>Shops</span>
            <small>Discover Stores</small>
        </Link>
    </div>
          

      <div className="right-side-header">
          <ul>
      
                    <li>
                      <Link to="/wishlist">WishList</Link>
                    </li>
                    <li>
                        <Link to="/Orders">
                          Orders
                        </Link>
                    </li>
                    <li className="cartheader">
                      <Link to="/cart">
                          🛒 Cart
                      </Link>

                      <span className="cart-amount">{cartCount}</span>
                  </li>
                    {isLoggedIn ? (
                  <li className="auth-links">
                      <button className="logout-btn"
                              onClick={onLogout}>Logout</button>
                  </li>
              ) : (
                  <li className="auth-links">
                      <Link to="/login">Login</Link>
                      {" / "}
                      <Link to="/register">Register</Link>
                  </li>
              )}
                </ul>
      </div>
      
      </header>

      
  );
}
export default Header;