const fs = require("fs");
const path = require("path");

const { rootDir } = require("../utils/paths");
const filePath = path.join(rootDir, "data", "product.json");

const fetchProducts = (callback) => {
    fs.readFile(filePath, (err, content) => {
        if (!err) {
            callback(JSON.parse(content));
        } else {
            callback([]);
        }
    });
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    };

    save() {
        fetchProducts(products => {
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), err => {
            })
        });
    }

    static fetchAllProducts(callback) {
        fetchProducts(products => {
            callback(products)
        })
    }
}