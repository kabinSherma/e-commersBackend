const express = require ('express')
import  type {Application,Request,Response} from 'express'
const app:Application= express()
const PORT:number = 3000


require('./model/index')


app.get('/',(req:Request,res:Response)=>{
    res.send("Hello world")
})


app.listen(PORT,()=>{
    console.log("Server started at port ",PORT)
})