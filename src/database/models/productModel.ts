require ('reflect-metadata')

const  { Table, Column,DataType,Model } = require('sequelize-typescript' )


// making table 

@Table ({
    tableName:"products",
    modelName:"Product",
    timestamps:true
})

//  making table column 

class Product extends Model {


    // table id 

    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4

    })
    declare productId:string;

    // product name 

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    declare productName:string;


    // product description 

    @Column({

        type:DataType.TEXT,
        allowNull:false
    })

    declare productDescription:string;

    
    // price 

    @Column({
        type: DataType.INTEGER,
        // allowNull:false
    })
    declare productPrice : number;


    // product quantity

    @Column({
        type: DataType.INTEGER,
        allowNull:false
    })
    declare productQuantity : number;

    // image 

    @Column ({
        type:DataType.STRING
    })
    declare productImage:string;
}


module.exports = Product
