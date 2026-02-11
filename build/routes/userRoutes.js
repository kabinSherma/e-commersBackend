"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const AuthController = require('../controllers/userController');
const router = express.Router();
router.route("/register")
    .post(AuthController.registerUser);
module.exports = router;
//# sourceMappingURL=userRoutes.js.map