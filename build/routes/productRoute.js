"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const ProductController = require('../controllers/productContorllre');
const router = express.Router();
router.route("/addProduct").post(ProductController.addProduct);
module.exports = router;
//# sourceMappingURL=productRoute.js.map