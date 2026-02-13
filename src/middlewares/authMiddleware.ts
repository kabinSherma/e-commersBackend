import type {Response,Request,NextFunction} from 'express'
const jwt= require("jsonwebtoken")
const User=require("../database/models/userModels")


interface AuthRequest extends Request {
    user? : {
        username:string,
        email:string,
        role:string,
        id:string,
        password:string
    }
}


 enum Role {
    admin ="admin",
    customer = "customer"
}

class AuthMiddleware {

    async isAuthenticated ( req:AuthRequest,res:Response,next:NextFunction):Promise<void>{

        // get token  from user 

        const token =req.headers.authorization
        if(!token || token == undefined || token == null){
            res.status(403).json({
                message: " Token is required"
            })
            return
        }


        //  verify token 


        jwt.verify(token,process.env.SECRET_KEY as string, async(err:any,decoded:any)=>{


            if(err){
                res.status(403).json({
                    message: "Invalid token"
                })
               
            }
            else {

              try {
                  const userData = await User.findByPk(decoded.id)
                 if(!userData){
                    res.status(403).json({
                        message: " User not found"
                    })
                    return
                 }

                 req.user =userData
                 next()

              } catch (error) {

                res.status(500).json({
                    message:" Something went wrong"
                })
                
              }
            }

        })


    }

    restrictTo(roles:string[]){

        return (req:AuthRequest,res:Response,next:NextFunction)=>{

            const userRole =req.user?.role as string

            if(!roles.includes(userRole)){

                res.status(403).json({
                    message: " You do not have permission to perform this action"
                })
                
            }
            else {
                 next ()
            }
        }
    }

}

module.exports = {AuthMiddleware:new AuthMiddleware(),Role}