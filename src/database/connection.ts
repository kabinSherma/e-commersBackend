require ('reflect-metadata')
const { Sequelize } = require('sequelize-typescript')

// Explicitly require models so decorators get applied
const User = require('./models/userModels')
const Product=require('./models/productModel')
const Category =require('./models/category') 
const Carts=require("./models/cartModel")

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    dialect: 'mysql',
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    models: [ User,Product,Category,Carts]
 })


 sequelize.authenticate().then(()=>{
    console.log("Connected") 
 })
 .catch((err:any)=>{
    console.log(err)
 })


 sequelize.sync({force:false}).then(()=>{
    console.log("synced  !!")
 })


//  relationships


//  user-product relation

User.hasMany(Product,{foreignKey: "userId"})
Product.belongsTo(User,{foreignKey:"userId"})

// product-category relation

Product.belongsTo(Category,{foreignKey: "categoryId"})
Category.hasOne(Product,{foreignKey:"categoryId"})

// cart-user relation

Carts.belongsTo(User,{foreignKey:"userId"})
User.hasMany(Carts,{foreignKey:"userId"})

// cart-product relation

Carts.belongsTo(Product,{foreignKey:"productId"})
Product.hasMany(Carts,{foreignKey:"productId"})


module.exports = sequelize