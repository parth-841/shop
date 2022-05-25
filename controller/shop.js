const db = require("../utils/database");

exports.getProducts = (req, res, next) => {
    db.execute("SELECT * from products").then(([products, fieldData])=>{
        res.render("shop/shop", { pageTitle: "Shop", products: products });
    }).catch((err)=>{
        console.log("Error:",err);
    })
}

exports.postProduct = (req, res, next) => {
    db.execute("select * from products where id = ?",[req.params.productId]).then(([products, fieldData]) => {
        res.render("shop/product",{pageTitle:"Product", product:products[0]})
    });
}

exports.getCart = (req, res, next) => {
    res.render("shop/cart", { pageTitle: "Cart" });
}