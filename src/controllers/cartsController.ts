import type { Request,Response} from "express"
const Carts=require("../database/models/cartModel")
const Product =require("../database/models/productModel")





interface MiddlewareRequest extends Request {

    
    user?:{
        id:string,
        username:string,
        role:string,
        email:string
    }
}



class CartsController{


    //  add to cart


    public static async addToCart(req:MiddlewareRequest,res:Response):Promise<void>{

        
        const {quantity,productId}=req.body
        const userId=req.user?.id
        

        if(!quantity || !userId || !productId){
            res.status(400).json({
                message: "Quantity, User Id and Product Id are required"
            })
        }
       
        let cartItem = await Carts.findOne({
            where:{
                userId,
                productId
            }
        })

        if(cartItem){

            cartItem.quantity += quantity
            await cartItem.save()
        }
        else {
          cartItem=  await Carts.create({
                quantity,
                userId,
                productId
            })
        }
        res.status(200).json({
            message: " Product added to cart succcessfully",
            data:cartItem
        })
    }


    // get cart items 



    public static async getMyCarts(req:MiddlewareRequest,res:Response):Promise<void>{

        const userId = req.user?.id
        const cartItems = await Carts.findAll({
            where:{
                userId
            },
            include :[
                {
                    model : Product
                }
            ]
        })

        if(cartItems.length === 0) {
            res.status(404).json({
                message: " No items found"
            })
        }
        else {
            res.status(200).json({
                message:" Carts items fetched ",
                data : cartItems
            })
        }
    }



    // delete cart items 


    public static async deleteCart(req:MiddlewareRequest,res:Response):Promise<void>{

        const id = req.params.id
        const userId=req.user?.id

        const [cartItems ]= await Carts.findAll({
            where :{
                 id:id
            }
        })
        // console.log(cartItems)

        if(!cartItems ){
            res.status(404).json({
                message: " No product with this id "
            })
        }

        else {
            await Carts.destroy({
                where:{
                    id:id,
                    userId
                }
            })
            res.status(200).json({
                message: " Products deleted successfully"
            })
        }
    }


    // update cart

    public static async updateCart(req:MiddlewareRequest,res:Response):Promise<void>{

        const id=req.params.id
        console.log(id)
        const userId = req.user?.id
        const {quantity,productId}=req.body

        const [items ]= await Carts.findAll({
            where:{
                id:id
            }
        })

        if(!items){
            res.status(404).json({
                message:" No product with this id"
            })
        }
        else {

            await Carts.update({
                quantity,
                userId,
                productId
            },{
                where:{
                    id:id
                    
                }
            })
            res.status(200).json({
                message: " Cart Updated successfully"
            })

        }
    }

}

module.exports=CartsController