const multer =require('multer')
import type { Request, } from 'express'

const storage = multer.diskStorage({



    // desitnation file name

    destination:function(req:Request,file:any,cb:any){

        const allowFiles = ['image/png','image/jpg','image/jpeg'];

        if(!allowFiles.includes(file.mimetype)){
            cb(new Error ("This types of file doesn't support"))
        }
        cb(null, "./storage")
    },
    filename:function(req:Request,file:any,cb:any){
        cb(null , Date.now()+ "-"+ file.originalname)
    }
})


module.exports = {multer,storage}