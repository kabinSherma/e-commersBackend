import type  { Response,Request } from 'express'
const Product =require('../database/models/productModel')
// const {storage , multer} =require ('../middleWare/multerConfig')

// const upload = multer({storage:storage})

class ProductController {
    
    public static async addProduct (req:Request, res:Response):Promise<void>{
        const {name,price,des}=req.body

        if(!name || !price || !des) {
            res.status(400).json({
                message:"Please provide Product Name, Price , Product Description and Image "
            })
            return
        }

       await Product.create({
            name,
            des,
            price
       })

        res.status(200).json({
            message:" Product added succcessfully "
        })
    }

}

module.exports = ProductController