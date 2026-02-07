"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const PORT = 3000;
require('./model/index');
app.get('/', (req, res) => {
    res.send("Hello world");
});
app.listen(PORT, () => {
    console.log("Server started at port ", PORT);
});
//# sourceMappingURL=app.js.map