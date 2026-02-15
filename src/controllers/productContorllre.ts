import type  { Response,Request } from 'express'
const Product =require('../database/models/productModel')
const User =require ('../database/models/userModels')
const Category =require('../database/models/category')


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


    // add product 
    
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


    // read products

    public static async getAllProducts(req:Request, res:Response):Promise<void>{

         const data = await Product.findAll(
            {
                include:[
                    {
                        model : User,
                        attributes: [ "id","username","email"]
                    },
                    {
                        model : Category,
                        attributes: [ "id","categoryName"]
                    }
                ]
            }
         )

         res.status(200).json({

            message : 'All products fetched successfully',
            data
         })
    }



    // read single produt 

    public static async getSingleProduct(req:Request,res:Response):Promise<void>{

        const id = req.params.id

        const data = await Product.findAll({
            where :{
                productId :id
            },
            include:[
                {
                    model:User,
                    attributes:["id","username","email"]
                },
                {
                    model    : Category,
                    attributes:["id","categoryName"]
                }

            ]

        })

        if(data.length === 0 ){
            res.status(404).json({
                message: " Product not found"
            })
        }
        else {
            res.status(200).json({
                message:  " Product fetched successfully",
                data
            })
        }
    }



    // delete product

    public static  async deleteProduct(req:Request,res:Response):Promise<void>{

        const id =req.params.id

        const data  = await Product.findAll({
            where :{
                productId:id
            }
        })


        if(data.length > 0 ){
            await Product.destroy({
                where:{
                    productId:id
                }
            })
            res.status(200).json({
                message: " Product deleted successfully"
            })
        }
        else {
            res.status(404).json({
                message: " Product no found "
            })
        }
    }


    // update / edit produt

    public static async editProduct(req:MiddlewareRequest,res:Response):Promise<void>{

        const id= req.params.id
        const {productName,productPrice,productDescription,productQuantity,categoryId}=req.body

        const data =await Product.findAll({
            where :{
                productId:id
            }
        })
        let fileName
        if(req.file){
            fileName = req.file?.filename
        }
        else {
            fileName = ""
        }

        if(data.length > 0 ){
            await Product.update({
                productName,
                productDescription,
                productPrice,
                productQuantity,
                productImage:fileName,
                categoryId
            },{
                where:{
                    productId:id
                }
            })
           
            
            
            res.status(200).json ({
                message:  " Product updated successfully",
                
            })
        }
        else {
            res.status(404).json({
                message : " Product not found "
            })
        }

    }

    
    
}

module.exports = ProductController