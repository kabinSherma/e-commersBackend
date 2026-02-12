 import type {Request,Response,NextFunction} from 'express'


 const errorHandler = (fn:Function)=>{
    return(req:Request,res:Response,next:NextFunction)=>{
        fn(req,res).catch((err:any)=>{
            
            return( res.status(500).json({
                message: " Internal Error",
                errorMessage :err.message
            })
            )
        })
    }
 }


 module.exports =errorHandler
 