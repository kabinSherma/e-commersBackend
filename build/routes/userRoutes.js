"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const AuthController = require('../controllers/userController');
const router = express.Router();
const ProductController = require('../controllers/productContorllre');
// route register
router.route("/register")
    .post(AuthController.registerUser);
// route login
router.route("/login").post(AuthController.loginUser);
router.route("/addProduct").post(ProductController.addProduct);
module.exports = router;
//# sourceMappingURL=userRoutes.js.map