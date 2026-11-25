
const fs = require("fs");
const path = require("path");

const productsPath = path.join(__dirname, "../data/products.json");

const productsData = fs.readFileSync(productsPath, "utf-8");

const products = JSON.parse(productsData);


function getAllProducts(req, res, next) {
    try {
        res.json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (err) {
        next(err);
    }
}


function getProductById(req, res, next) {
    try {
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

    } catch (err) {
        next(err);
    }
}


module.exports = {
    getAllProducts,
    getProductById
};
