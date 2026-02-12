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
    declare id:string;

    // product name 

    @Column({
        type: DataType.STRING
    })
    declare name:string;


    // product description 

    @Column({

        type:DataType.STRING
    })

    declare des:string;

    
    // price 

    @Column({
        type: DataType.FLOAT
    })
    declare price : number;

    // image 

//     @Column ({
//         type:DataType.STRING
//     })
//     declare image:string;
}


module.exports = Product
