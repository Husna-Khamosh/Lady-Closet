
import products from "../Data";
import "../CSS/Admin.css";
import {
    Shirt,
    Footprints,
    ShoppingBag,
    Watch,
    Tags,
    ArrowLeft
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

function AdminCategories() {
    const [openMenu, setOpenMenu] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const menuRef = useRef(null);
    const [showAddCategory, setShowAddCategory] = useState(false);
    const [newCategory, setNewCategory] = useState(""); 

    useEffect(function() {
        function handleClickOutside(event) {
            if (!event.target.closest(".category-menu")) {
                setOpenMenu(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return function() {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [categories, setCategories] = useState(() => {
    const savedCategories = JSON.parse(
        localStorage.getItem("categories") || "null"
    );

    if (savedCategories) {
        return savedCategories;
    }

    return [...new Set(
        products.map(function(product) {
            return product.category;
        })
    )];
});

    function getCategoryIcon(category) {
        if (category === "Clothing") return <Shirt size={28} />;
        if (category === "Shoes") return <Footprints size={28} />;
        if (category === "Bags") return <ShoppingBag size={28} />;
        if (category === "Accessories") return <Watch size={28} />;

        return <Tags size={28} />;
    }

    function viewCategoryProducts(category) {
        setSelectedCategory(category);
        setOpenMenu(null);
    }

    const selectedProducts = products.filter(function(product) {
        return product.category === selectedCategory;
    });

    function handleAddCategory() {
    const categoryName = newCategory.trim();

    if (categoryName === "") {
        alert("Please enter a category name.");
        return;
    }

    const categoryExists = categories.some(function(category) {
        return category.toLowerCase() === categoryName.toLowerCase();
    });

    if (categoryExists) {
        alert("This category already exists.");
        return;
    }

    const updatedCategories = [...categories, categoryName];

    setCategories(updatedCategories);

    localStorage.setItem("categories", JSON.stringify(updatedCategories));;

        setNewCategory("");
        setShowAddCategory(false);
    }


    function handleDeleteCategory(category) {

    const confirmDelete = window.confirm(
        `Are you sure you want to delete ${category}?`
    );

    if (!confirmDelete) {
        return;
    }

    const updatedCategories = categories.filter(function(item) {
        return item !== category;
    });

    setCategories(updatedCategories);

    localStorage.setItem(
        "categories",
        JSON.stringify(updatedCategories)
    );
}

    return (
        <div className="admin-container">
            <main className="main-content">

                <header className="Dashboard-header">
                    <div>
                        <h2 className="title">
                            {selectedCategory || "Categories"}
                        </h2>

                        <p>
                            {selectedCategory
                                ? "Products in this category."
                                : "Manage your store product categories."}
                        </p>
                    </div>

                    {!selectedCategory && (
                        <button
                            className="add-category-btn"
                            onClick={function() {
                                setShowAddCategory(true);
                            }}
                        >
                            + Add New Category
                        </button>
                    )}
                </header>

                {showAddCategory && (
                    <div className="add-category-form">

                        <h3>Add New Category</h3>

                        <input
                            type="text"
                            placeholder="Enter category name"
                            value={newCategory}
                            onChange={function(event) {
                                setNewCategory(event.target.value);
                            }}
                        />

                        <div className="category-form-buttons">
                            <button onClick={function() {
                                setShowAddCategory(false);
                                setNewCategory("");
                            }}>
                                Cancel
                            </button>                            
                            <button onClick={handleAddCategory}>
                                Save Category
                            </button>
                        </div>

                    </div>
                )}

                {selectedCategory ? (
                    <div className="category-products-section">

                        <button
                            className="back-categories-btn"
                            onClick={function() {
                                setSelectedCategory(null);
                            }}
                        >
                            <ArrowLeft size={17} />
                            Back to Categories
                        </button>

                        <div className="category-products-grid">
                            {selectedProducts.map(function(product) {
                                return (
                                    <div className="category-product-card" key={product.id}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                        />

                                        <div className="category-product-info">
                                            <h3>{product.name}</h3>
                                            <p className="product-price">${product.price}</p>
                                            <p className="product-shop">
                                                Shop: {product.shop || "Lady Closet"}
                                            </p>
                                            <span className="product-category">
                                                {product.category}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {selectedProducts.length === 0 && (
                            <p>No products found in this category.</p>
                        )}

                    </div>
                ) : (
                    <div className="categories-container">
                        {categories.map(function(category) {
                            const categoryProducts = products.filter(function(product) {
                                return product.category === category;
                            });

                            return (
                                <div className="category-card" key={category}>

                                    <div className="category-icon">
                                        {getCategoryIcon(category)}
                                    </div>

                                    <div className="category-menu">
                                        <button
                                            className="category-menu-btn"
                                            onClick={function() {
                                                setOpenMenu(
                                                    openMenu === category ? null : category
                                                );
                                            }}
                                        >
                                            ⋮
                                        </button>

                                        {openMenu === category && (
                                            <div className="category-dropdown">
                                                <p>Menu is open: {category}</p>
                                               <button onClick={function() {
                                                    viewCategoryProducts(category);
                                                }}>
                                                    View Products
                                                </button>

                                                <button>Edit Category</button>

                                                <button
                                                    className="delete-option"
                                                    onClick={function() {
                                                        handleDeleteCategory(category);
                                                        setOpenMenu(null);
                                                    }}
                                                >
                                                    Delete Category
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    <h3>{category}</h3>
                                    <p>{categoryProducts.length} Products</p>

                                </div>
                            );
                        })}
                    </div>
                )}

            </main>
        </div>
    );
}

export default AdminCategories;
