"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    dbName: "e-commersdatabase",
    dialect: "mysql",
    pool: {
        min: 0,
        max: 5,
        idel: 10000,
        acquire: 10000
    }
};
module.exports = dbConfig;
//# sourceMappingURL=config.js.map