"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("../database/models/userModels");
class AuthController {
    static async registerUser(req, res) {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).json({
                message: "Please provide email,password,username"
            });
            return;
        }
        await User.create({
            username,
            email,
            password
        });
        res.status(201).json({
            message: "User register successfully"
        });
    }
}
module.exports = AuthController;
//# sourceMappingURL=userController.js.map