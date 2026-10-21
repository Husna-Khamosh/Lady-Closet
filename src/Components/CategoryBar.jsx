 import React from "react";
import "../CSS/store.css";


function CategoryBar(){
    return (
         <>
        <div className="category-top">
            <div className="category-top-left">
                <h5>WINTER ELECTRONICS WEEK</h5>
                <p>UP TO 25% OFF AUDIO FROM 40 VERIFIED SHOPS</p>
                <button>Shop Deals</button>
            </div>

            <div className="category-top-right">
                <img src="https://www.californiaclosets.com/cdn-cgi/imagedelivery/QcmF9QxCY9IztJwh4l1kWw/prod-admin.cc-website.com/2025/07/wardrobe-closet-design-workstation-vanity-shoe-shelving-california-closets.jpeg/w=1920,q=75" alt="" />
            </div>
        </div>

   
        <h3 className="section-title">Shop By Category:</h3>
        <div className="shop-by-category">
            <div className="shop-by-category-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0S1ZlA_3_Msbp_TbWh0BUamk1QlVKpGTzqL2rj_PASg&s=10" alt="Clothing" />
                <h4 className="title">Clothing</h4>
            </div>
            <div className="shop-by-category-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmCkoEmoqT6GeqQRCfaauESmzYNkQBxCdhJAzIoMGdg&s=10" alt="Footwear" />
                <h4 className="title">Footwear</h4>
            </div>
            <div className="shop-by-category-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVgWfK1K8WTdMxJZEJl8TUvlEp7K9LJ6jmtBtWSk5vUg&s=10" alt="Pants & Jeans" />
                <h4 className="title">Pants & Jeans</h4>
            </div>
            <div className="shop-by-category-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0W2TCexHSv3xXjbj9U5gSJSRVVhv2mETr6xNjtlEgrw&s=10" alt="Sneakers" />
                <h4 className="title">Sneakers</h4>
            </div>
            <div className="shop-by-category-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktsVy3PMSDOv4BggdvfX7HHY6jFKZzxIWH2M0LQWDrA&s=10" alt="Bags" />
                <h4 className="title">Bags</h4>
            </div>
            <div className="shop-by-category-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEuZAuus4QWRLWDuei7gpHIVfqtD4LbPKc3qlhDFUgyw&s=10" alt="Scarves & Shawls" />
                <h4 className="title">Scarves & Shawls</h4>
            </div>
            <div className="shop-by-category-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3v0FGn4V6odBy0U7Jf3vrtTsHPU_jbzCVnbGMzmCYsw&s=10" alt="Accessories" />
                <h4 className="title">Accessories</h4>
            </div>
        </div>
        </>
    );
}
export default CategoryBar;