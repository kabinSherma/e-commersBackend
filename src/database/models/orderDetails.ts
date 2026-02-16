require('reflect-metadata')
const {Table,Column,DataType,Model}=require('sequelize-typescript')

@Table({
    tableName:"orderDetails",
    modelName:"OrderDetails",
    timestamp:true
})


class OrdersDetails extends Model {


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
    declare quantity:number

    


    
}

module.exports = OrdersDetails