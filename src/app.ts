require('reflect-metadata')

const dotenv = require ('dotenv')
dotenv.config()

const express = require ('express')
import  type {Application} from 'express'
const app:Application= express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const PORT:number = 3000

require('./database/connection')
const productRoutes = require('./routes/productRoute')
const userRoutes = require('./routes/userRoutes')
const CategoryController = require ('./controllers/categoryController')
const categoryRoutes =require('./routes/categoryRoute')
const cartsRoutes = require('./routes/cartsRoutes')

// seeding admin crendeential 

const adminSeeding= require('./services/adminSeeding')

adminSeeding()


CategoryController.seedingCategory()

app.use("",userRoutes)

app.use("",productRoutes)
app.use("",categoryRoutes)
app.use("",cartsRoutes)


app.listen(PORT,()=>{
    console.log("Server started at port ",PORT)
})