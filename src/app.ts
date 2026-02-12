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

app.use("",userRoutes)

// app.use("",productRoutes)


app.listen(PORT,()=>{
    console.log("Server started at port ",PORT)
})