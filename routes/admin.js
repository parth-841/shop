const express = require("express");

const admin = require("../controller/admin.js");

const router = express.Router();


router.get("/add-product", admin.getAddProduct);

router.post("/product", admin.postAddProduct);

module.exports = router;