const express = require("express");
const storeController = require("../controllers/stores.controller");

const router = express.Router();

router.get("/", storeController.getAllStores);
router.get("/:id", storeController.getStoresById);

module.exports = router;