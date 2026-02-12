"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require('reflect-metadata');
const { Table, Column, DataType, Model } = require('sequelize-typescript');
// making table 
let Product = 
//  making table column 
class Product extends Model {
};
__decorate([
    Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    }),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    Column({
        type: DataType.STRING
    }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    Column({
        type: DataType.STRING
    }),
    __metadata("design:type", String)
], Product.prototype, "des", void 0);
__decorate([
    Column({
        type: DataType.FLOAT
    }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
Product = __decorate([
    Table({
        tableName: "products",
        modelName: "Product",
        timestamps: true
    })
    //  making table column 
], Product);
module.exports = Product;
//# sourceMappingURL=productModel.js.map