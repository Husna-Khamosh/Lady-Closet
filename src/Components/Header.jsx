import React from "react";
import "../CSS/store.css";

function Header() {
  return (
    <header className="store-header">
      <div className="left-side-header">
        <div className="left-side-header-top">
          <img
            src="/images/woman.png"
            alt="Husna Khamosh"
          />

          <span>Husna Khamosh</span>

          <input
            type="search"
            placeholder="Filter the products you are looking for"
          />
        </div>
      </div>

      <div className="right-side-header">
          <ul>
                    <li><a href="wishlist.html">WishList</a></li>
                    <li><a href="order.html">Orders</a></li>
                    <li class="cartheader">
                        <a href="yourCart.html">🛒 Cart</a>
                        <span class="cart-amount">3</span>
                    </li>
                    <li class="OR">OR</li>
                </ul>
      </div>
      </header>

      
  );
}
export default Header;