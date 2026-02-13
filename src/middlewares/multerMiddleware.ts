import type { Request} from 'express'
const  multer =require ('multer')


const storage = multer.diskStorage({

    destination (req:Request,file:any,cb:any){

        const allowFileTypes = [ 'image/jpeg', 'image/png', 'image/jpg']

        if(!allowFileTypes.includes(file.mimetype)){
            cb(new Error( " This types of file is not allowed"))
            return
        }


        cb(null, "./src/storage")
    },


    filename (req:Request,file:any,cb:any){

        cb(null, Date.now() + "-" + file.originalname)
    }
})


module.exports  = {multer,storage}