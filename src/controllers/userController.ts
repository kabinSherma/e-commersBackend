import type {Request,Response} from 'express'
const bcrypt =require('bcrypt')
const User =require("../database/models/userModels")
const jwt = require("jsonwebtoken")



class AuthController {

    public static async registerUser(req:Request,res:Response):Promise<void>{

       
        
         // user input
        const {username,email,password,role}=req.body
        console.log(req.body)
        

        
        
        // cheacking 
        if(!username || ! email || !password) {
            res.status(400).json({
                message:"Please provide email,password,username"
            })
            return
        }
        
        const [emailData] = await  User.findAll({
            where : {
                email : email
            }
        })
        // console.log(emailData)

        if(emailData ){
            res.status(403).json({
                message: " User with this email is already registered"
            })
            
        }
        else {

            await User.create({
                 username,
                 email,
                 password :bcrypt.hashSync(password,8),
                 role:role
             })
     
             res.status(201).json({
                 message:"User register successfully"
             })
        }

    }
    

    public static async loginUser (req:Request,res:Response):Promise<void>{

        //  user input
        const {email,password} = req.body

        if(!email || !password){
            res.status(400).json({
                message:"Please provide email and password"
            })
            return
        }

        //  fetch data from the input

        const [data] = await User.findAll({
            where : {
                email : email
            }
        })
        console.log(data)

        //  check wheather the email is avaiable 

        if(!data){
            res.status(400).json({
                message:" No user is with this email  "
            })
            return
        }

        // if emain is there check password

        const isMatched = bcrypt.compareSync(password,data.password)

        if(isMatched){
            
            // generate token to user 
            const token = jwt.sign(
                {id:data.id},
                process.env.SECRET_KEY as string,
                {
                expiresIn : "20d"
                }
            )
            res.status(200).json({
                message:" Loggined successfully",
                data:token  
            })

        }
        else {
            res.status(400).json({
                message:" Invalid  password or email Id"
            })
        }

        


    }
}


 
module.exports =   AuthController