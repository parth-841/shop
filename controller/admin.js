const db = require("../utils/database");

exports.getAddProduct = (req, res, next) => {
    if(req.params.productId){
        db.execute("select * from products where id = ?",[req.params.productId]).then(([products, fieldData]) => {
            res.render("admin/add-product", { pageTitle: "Edit Product", edit: true, product:products[0] });
        });
    }else {
        res.render("admin/add-product", { pageTitle: "Add Product", edit: false });
    }
}

exports.postAddProduct = (req, res, next) => {
    if(req.body.productId){
        db.execute("update products set title = ?, imageUrl = ?, price = ?, description = ? where id = ?",[`${req.body.title}`, `${req.body.imageUrl}`, req.body.price, `${req.body.description}`, req.body.productId]);    
    } else {
        db.execute("INSERT INTO products (title, imageUrl, price, description) VALUES (?,?,?,?)",[`${req.body.title}`, `${req.body.imageUrl}`, req.body.price, `${req.body.description}`]);
    }
    res.redirect("/admin/products");
}

exports.postProduct = (req, res, next) => {
    db.execute("select * from products where id = ?",[req.params.productId]).then(([products, fieldData]) => {
        res.render("shop/product",{pageTitle:"Product", product:products[0]})
    });
}

exports.getProducts = (req, res, next) => {
    db.execute("SELECT * from products").then(([products, fieldData])=>{
        res.render("admin/products", { pageTitle: "Shop", products: products });
    }).catch((err)=>{
        console.log("Error:",err);
    })
}

exports.postDeleteProduct = (req, res, next) => {
    db.execute("delete from products where id = ?",[req.params.productId]);
    res.redirect("/admin/products");
}