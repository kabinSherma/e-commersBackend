import type  { Response,Request } from 'express'
const Product =require('../database/models/productModel')


interface MiddlewareRequest extends Request {

    file?:any
}


class ProductController {
    
    public static async addProduct (req:MiddlewareRequest, res:Response):Promise<void>{
        const {productName,productPrice,productDescription,productQuantity}=req.body
        let fileName 

        if (req.file){

            fileName = req.file?.filename
        }
        else {

            fileName = ""
        }

        if(!productName || !productPrice || !productDescription || !fileName || !productQuantity) {
            res.status(400).json({
                message:"Please provide Product Name, Price , Product Description, Image and Quantity"
            })
            return
        }

       await Product.create({
            productName,
            productDescription,
            productPrice,
            productQuantity,
            productImage: fileName
       })

        res.status(200).json({
            message:" Product added succcessfully "
        })
    }

}

module.exports = ProductController