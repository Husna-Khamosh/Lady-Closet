const fs = require("fs");
const path = require("path");
const categoriesPath = path.join(__dirname, "../data/categories.json");

const categoriesData = fs.readFileSync(categoriesPath, "utf-8");
const categories = JSON.parse(categoriesData);

function getAllCategories(req, res){
    res.json({
        success : true,
        count: categories.length,
        data: categories
    })
}

function getCategoriesById(req, res){
    const categoryId = req.params.id;

    const Category = categories.find(function(item){
        return item.id === Number(categoryId);

    });

    if(!Category){
        return res.status(404).json({
            success: false,
            message: "The category not Found!"
        })
    }

    return res.json({
            success: true,
            data: Category
    })

}
module.exports = {
    getAllCategories,
    getCategoriesById
}