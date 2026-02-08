const dotenv = require ('dotenv')
dotenv.config()

const express = require ('express')
import  type {Application,Request,Response} from 'express'
const app:Application= express()
const PORT:number = 3000


require('./database/connection')

app.get('/',(req:Request,res:Response)=>{
    res.send("Hello world")
})


app.listen(PORT,()=>{
    console.log("Server started at port ",PORT)
})