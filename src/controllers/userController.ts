import type {Request,Response} from 'express'
const bcrypt =require('bcrypt')
const User =require("../database/models/userModels")



class AuthController {

    public static async registerUser(req:Request,res:Response):Promise<void>{
        const {username,email,password}=req.body
        if(!username || ! email || !password) {
            res.status(400).json({
                message:"Please provide email,password,username"
            })
            return
        }

       await User.create({
            username,
            email,
            password :bcrypt.hashSync(password,8)
        })

        res.status(201).json({
            message:"User register successfully"
        })
    }
}


 
module.exports =   AuthController