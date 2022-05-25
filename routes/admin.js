const express = require("express");

const admin = require("../controller/admin.js");

const router = express.Router();


router.get("/add-product", admin.getAddProduct);

router.get("/edit-product/:productId", admin.getAddProduct);

router.post("/add-product", admin.postAddProduct);

router.post("/delete/:productId", admin.postDeleteProduct);

router.get("/products",admin.getProducts);
module.exports = router;