"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product = require('../database/models/productModel');
class ProductController {
    static async addProduct(req, res) {
        const { name, price, Des } = req.body;
        if (!name || !price || !Des) {
            res.status(400).json({
                message: "Please provide Product Name, Price , Product Description and Image "
            });
            return;
        }
        await Product.create({
            name,
            price,
            Des
        });
        res.status(200).json({
            message: " Product added succcessfully "
        });
    }
}
module.exports = ProductController;
//# sourceMappingURL=productContorllre.js.map