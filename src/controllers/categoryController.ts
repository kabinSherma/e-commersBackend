
const Category = require('../database/models/category')


class CategoryContorller {

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

}


module.exports = new CategoryContorller()