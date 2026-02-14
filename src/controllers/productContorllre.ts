import type  { Response,Request } from 'express'
const Product =require('../database/models/productModel')


interface MiddlewareRequest extends Request {

    file?:any
    user?:{
        id:string,
        username:string,
        role:string,
        email:string
    }
}


class ProductController {
    
    public static async addProduct (req:MiddlewareRequest, res:Response):Promise<void>{
        const {productName,productPrice,productDescription,productQuantity,categoryId}=req.body

        const userId = req.user?.id
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
            productImage: fileName,
            userId:userId,
            categoryId
       })

        res.status(200).json({
            message:" Product added succcessfully "
        })
    }

}

module.exports = ProductController