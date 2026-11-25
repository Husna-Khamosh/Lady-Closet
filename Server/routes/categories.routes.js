const express = require("express");
const categoriesController = require("../controllers/categories.controller");

const router = express.Router();

router.get("/", categoriesController.getAllCategories);
router.get("/:id", categoriesController.getCategoriesById);

module.exports = router;