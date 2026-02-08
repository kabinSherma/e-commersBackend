const {Sequelize} = require ('sequelize-typescript')


 const sequelize = new Sequelize ({
    database: process.env.DB_NAME,
    host : process.env.DB_HOST,
    username : process.env.DB_USER,
    dialect: "mysql",
    password : process.env.DB_PASSWORD ,
    port : Number(process.env.DB_PORT),
    models : [ __dirname + "/models"]
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