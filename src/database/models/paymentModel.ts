require('reflect-metadata')
const {Table,Column,DataType,Model}=require('sequelize-typescript')

@Table({
    tableName:"payment",
    modelName:"Payment",
    timestamp:true
})


class Payment extends Model {


    @Column({
        primaryKey:true,
        type:DataType.UUID,
        defaultValue:DataType.UUIDV4
    })
    declare id:string

    @Column({
        type:DataType.ENUM("COD"," Khalti", "eSewa"),
        allowNull:true
    })
    declare paymentMethod:string

    @Column({
        type:DataType.ENUM("paid", "unpaid"),
        defaultValue:"unpaid",
        allowNull:true
    })
    declare  paymentStatus:string

    @Column({
        type:DataType.STRING
    })
    declare pidx:string

    
}

module.exports = Payment