require('reflect-metadata')
const {Table,Column,DataType,Model}=require('sequelize-typescript')

@Table({
    tableName:"order",
    modelName:"Orders",
    timestamp:true
})


class Orders extends Model {


    @Column({
        primaryKey:true,
        type:DataType.UUID,
        defaultValue:DataType.UUIDV4
    })
    declare id:string

    @Column({
        type:DataType.INTEGER,
        allowNull:true
    })
    declare phoneNumber:number

    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    declare address:string

    @Column({
        type:DataType.FLOAT,
        
    })
    declare totalAmount:number

    @Column({
        type:DataType.ENUM("Pending", " Cancelled", "Delivered", " On the way ", "Preparation"),
        allowNull:true
    })
    declare  status:string


    
}

module.exports = Orders