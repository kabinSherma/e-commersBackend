"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('reflect-metadata');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;
require('./database/connection');
const productRoutes = require('./routes/productRoute');
const userRoutes = require('./routes/userRoutes');
app.use("", userRoutes);
app.use("", productRoutes);
app.listen(PORT, () => {
    console.log("Server started at port ", PORT);
});
//# sourceMappingURL=app.js.map