
const Category = require('../database/models/category')
import type {Request,Response} from "express"




class CategoryController {

    categoryData = [
        {
            categoryName: 'Electronics'
        },
        {
            categoryName: 'Clothing'
        },
        {
            categoryName: 'Home & Kitchen'
        }
    ]

    // seeding category data

    async seedingCategory():Promise<void>{

        const dataExists = await Category.findAll()

        if(dataExists.length ===0){

            const data= await Category.bulkCreate(this.categoryData)
            console.log(" Category Seeded successfully")
        }
        else {
             console.log("Category already seeded")
        }

    }


    // add product category

    async addProductCategory(req:Request,res:Response):Promise<void>{
        
        const {categoryName} = req.body
        
        

        if(!categoryName){
            res.status(400).json({
                message:" Please provide category name "
            })
        }
        else {
            await Category.create({
                categoryName
            })
            res.status(200).json({
                message:" Category added successfully"
            })
        }
    }

    // readall category 

    async readCategories(req:Request,res:Response):Promise<void>{
        const data = await Category.findAll()
        res.status(200).json({
            message: " Categories fetched successfully",
            data
        })
    }


    // delete category 

    async deleteCategory(req:Request,res:Response):Promise<void>{
        const id = req.params.id
        const data = await Category.findAll({
            where:{
                id:id
            }
        })

       if(data.length ===0){
        res.status(400).json({
            message: " Category with this ID is not found"
        })
       }
       else {
        await Category.destroy({
            where:{
                id:id  
            }
        })
        res.status(200).json({
            message:  " Category deleted successfully"
        })
       }
    }

    // update category

    async updateCategory(req:Request,res:Response):Promise<void>{
        const id = req.params.id 
        const {categoryName}=req.body

       

            await Category.update({
                categoryName
            },{
                where:{
                    categoryId:id
                }
            })
            res.status(200).json({
                message: " Category updated successfully"
            })
        
    }

}


module.exports = new CategoryController()