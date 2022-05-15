
const Product = require("../models/product");
exports.getProducts = (req, res, next) => {
    Product.fetchAllProducts(products => {
        res.render("shop", { pageTitle: "Shop", products: products });
    });
}

exports.getCart = (req, res, next) => {
    res.render("cart", { pageTitle: "Cart" });
}