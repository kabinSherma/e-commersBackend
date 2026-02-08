const {Sequelize, DataTypes } = require('Sequelize')
const dbConfig = require('../config/config')

const sequelize = new Sequelize (dbConfig.dbName,dbConfig.user,dbConfig.password,{
    host: dbConfig.host,
    dialect:dbConfig.dialect,
    port:3306,
    pool:{
        min:dbConfig.pool.min,
        max:dbConfig.pool.max,
        idel:dbConfig.pool.idel,
        acquire:dbConfig.pool.acquire
    }
})

sequelize.authenticate().then(()=>{
    console.log("Connected")
})


const db:any = {

}

db.Sequelize=Sequelize
db.sequelize=sequelize

db.sequelize.sync({force:true}).then(()=>{
    console.log("Yes migratted")
})

module.exports = db 