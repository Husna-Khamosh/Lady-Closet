const fs = require("fs");
const path = require("path");

const productsPath = path.join(__dirname, "../data/products.json");

const productsData = fs.readFileSync(productsPath, "utf-8");

const products = JSON.parse(productsData);

function getAllProducts(req, res) {
    res.json({
        success: true,
        count: products.length,
        data: products
    });
}

function getProductById(req, res) {

    const productId = req.params.id;

    const product = products.find(function(item) {
    return item.id === Number(productId);
    });

    if (!product) {
    return res.status(404).json({
        success: false,
        message: "Product not found"
    });
    }

    return res.json({
    success: true,
    data: product
    });
    console.log("Requested Product ID:", productId);

}

module.exports = {
    getAllProducts,
    getProductById
};