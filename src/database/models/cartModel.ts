require("reflect-metadata")

const { Table, Column,Model,DataType}=require("sequelize-typescript")

 
@Table({
    tableName :"cart",
    modelName:"Carts",
    timestamps:true
})


class Carts extends Model{

    @Column({
        primaryKey:true,
        type:DataType.UUID,
        defaultValue:DataType.UUIDV4
    })
    declare id:string

    

    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    declare quantity:number





}

module.exports=Carts