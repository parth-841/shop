const express = require("express");

const shop = require("../controller/shop");

const router = express.Router();


router.get("/", shop.getProducts);

router.post("/product/:productId",shop.postProduct);

router.get("/cart", shop.getCart);

module.exports = router;