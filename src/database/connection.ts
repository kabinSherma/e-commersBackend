require ('reflect-metadata')
const { Sequelize } = require('sequelize-typescript')

// Explicitly require models so decorators get applied
const User = require('./models/userModels')
const Product=require('./models/productModel')

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    dialect: 'mysql',
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    models: [ User,Product]
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


module.exports = sequelize