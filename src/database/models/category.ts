require('reflect-metadata')

const { Table, Column , Model, DataType,Primarykey}=require("sequelize-typescript")



@Table ({

    tableName:"categories",
    modelName:"Category",
    timestamps:true
})


class Category extends Model {


    @Column({
        primaryKey:true,
        type:DataType.UUID,
        defaultValue:DataType.UUIDV4
    })

    declare id:string;

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare categoryName:string


}

module.exports=Category