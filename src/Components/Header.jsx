import React from "react";
import "../CSS/store.css";
import { Link } from "react-router-dom";


function Header({ onCategoryChange, cartCount, showCategories = true }) {
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

{showCategories && (
<nav className="left-side-header-bottom">
  <ul>
    <li>
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          onCategoryChange("All");
        }}
      >
        All Products
      </a>
    </li>

    <li>
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          onCategoryChange("Clothing");
        }}
      >
        Clothing
      </a>
    </li>

    <li>
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          onCategoryChange("Footwear");
        }}
      >
        Footwear
      </a>
    </li>

    <li>
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          onCategoryChange("Pants & Jeans");
        }}
      >
        Pants &amp; Jeans
      </a>
    </li>

    <li>
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          onCategoryChange("Sneakers");
        }}
      >
        Sneakers
      </a>
    </li>

    <li>
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          onCategoryChange("Bags");
        }}
      >
        Bags
      </a>
    </li>

    <li>
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          onCategoryChange("Scarves & Shawls");
        }}
      >
        Scarves &amp; Shawls
      </a>
    </li>

    <li>
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          onCategoryChange("Accessories");
        }}
      >
        Accessories
      </a>
    </li>
  </ul>
</nav>
)}


      </div>
      

      <div className="right-side-header">
          <ul>
                    <li>
                      <Link to="/wishlist">WishList</Link>
                    </li>
                    <li><a href="order.html">Orders</a></li>
                    <li className="cartheader">
                      <Link to="/cart">
                          🛒 Cart
                      </Link>

                      <span className="cart-amount">{cartCount}</span>
                  </li>
                    <li className="OR">OR</li>
                </ul>
      </div>
      
      </header>

      
  );
}
export default Header;