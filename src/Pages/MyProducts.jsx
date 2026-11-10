import React, { useState } from "react";
import "../CSS/VendorDashboard.css";

function MyProducts({ currentUser }) {
    const [showForm, setShowForm] = useState(false);
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState(""); 
    const [editingProductId, setEditingProductId] = useState(null);

    const [vendorProducts, setVendorProducts] = useState(() => {
    const savedProducts = JSON.parse(
        localStorage.getItem("vendorProducts") || "[]"
    );

    return savedProducts.filter(function(product) {
        return product.shop === currentUser.shopName;
    });
});

    function handleEditProduct(product) {
    setEditingProductId(product.id);

    setProductName(product.name);
    setPrice(product.price);
    setCategory(product.category);
    setImage(product.image || "");
    setDescription(product.description || "");

    setShowForm(true);
}
    function handleAddProduct() {

    if (!productName.trim() || !price || !category) {
        alert("Please fill in all required fields.");
        return;
            }

    if (editingProductId !== null) {

    const updatedProducts = vendorProducts.map(function(product) {

        if (product.id === editingProductId) {
            return {
                ...product,
                name: productName.trim(),
                price: Number(price),
                category: category,
                image: image.trim(),
                description: description.trim()
            };
        }

        return product;
    });

    const allProducts = JSON.parse(
        localStorage.getItem("vendorProducts") || "[]"
    );

    const finalProducts = allProducts.map(function(product) {

        const updatedProduct = updatedProducts.find(function(item) {
            return item.id === product.id;
        });

        return updatedProduct || product;
    });

    localStorage.setItem(
        "vendorProducts",
        JSON.stringify(finalProducts)
    );

    setVendorProducts(updatedProducts);

    setEditingProductId(null);
    setProductName("");
    setPrice("");
    setCategory("");
    setImage("");
    setDescription("");
    setShowForm(false);

    return;
}

            const newProduct = {
                id: Date.now(),
                name: productName.trim(),
                shop: currentUser.shopName,
                price: Number(price),
                category: category,
                image: image.trim(),
                description: description.trim(),
                rating: 0
            };

            const savedProducts = JSON.parse(
                localStorage.getItem("vendorProducts") || "[]"
            );

            const updatedProducts = [...savedProducts, newProduct];

            localStorage.setItem(
                "vendorProducts",
                JSON.stringify(updatedProducts)
            );
            setVendorProducts(
            updatedProducts.filter(function(product) {
                return product.shop === currentUser.shopName;
            })
            );  

            setProductName("");
            setPrice("");
            setCategory("");
            setImage("");
            setDescription("");

            setShowForm(false);

            console.log("Product Saved:", updatedProducts);
            }


        function handleDeleteProduct(productId) {
            const confirmDelete = window.confirm(
                "Are you sure you want to delete this product?"
            );

            if (!confirmDelete) {
                return;
            }

            const updatedProducts = vendorProducts.filter(function(product) {
                return product.id !== productId;
            });

            const allProducts = JSON.parse(
                localStorage.getItem("vendorProducts") || "[]"
            );

            const otherProducts = allProducts.filter(function(product) {
                return product.shop !== currentUser.shopName;
            });

            const finalProducts = [...otherProducts, ...updatedProducts];

            localStorage.setItem(
                "vendorProducts",
                JSON.stringify(finalProducts)
            );

            setVendorProducts(updatedProducts);
        }

    return (
        <div className="vendor-products-page">

            <div className="vendor-products-header">
                <div>
                    <h2>My Products</h2>
                    <p>Manage your shop products here.</p>
                </div>

                <button onClick={() => {
                setEditingProductId(null);
                setProductName("");
                setPrice("");
                setCategory("");
                setImage("");
                setDescription("");
                setShowForm(true);
            }}>
                + Add New Product
            </button>
           
            </div>


            {showForm && (
                <div className="add-product-form">

                    <h3>Add New Product</h3>

                    <div className="form-group">
                        <label>Product Name</label>
                        <input
                            type="text"
                            placeholder="Enter product name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price (AFN)</label>
                        <input
                            type="number"
                            placeholder="Enter product price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Select Category</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Bags">Bags</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Product Image URL</label>
                        <input
                            type="text"
                            placeholder="Enter image URL"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                        placeholder="Describe your product"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    </div>

                     <button type="button" onClick={handleAddProduct}>
                        {editingProductId !== null ? "Update Product" : "Save Product"}
                    </button>

                    <button
                        type="button"
                        onClick={() => setShowForm(false)}
                    >
                        Cancel
                    </button>

                </div>
            )}


            <div className="vendor-products-list">

                {vendorProducts.length === 0 ? (
                    <p className="no-products">
                        You haven't added any products yet.
                    </p>
                ) : (
                    vendorProducts.map(function(product) {
                        return (
                            <div className="vendor-product-card" key={product.id}>

                                <img
                                    src={product.image || "/images/product-placeholder.png"}
                                    alt={product.name}
                                />

                                <div>
                                    <h3>{product.name}</h3>
                                    <p>{product.category}</p>
                                    <p>AFN {product.price.toLocaleString()}</p>
                                </div>
                                <button
                                    type="button"
                                    className="delete-product-btn"
                                    onClick={() => handleDeleteProduct(product.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="edit-product-btn"
                                    onClick={() => handleEditProduct(product)}
                                >
                                    Edit
                                </button>

                            </div>

                            
                        );
                    })
                )}

            </div>

            
                </div>
            );
        }

export default MyProducts;