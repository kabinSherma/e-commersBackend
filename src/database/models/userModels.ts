require('reflect-metadata')
const {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt
} = require('sequelize-typescript')


//  making table 

@Table ({
    tableName:"users",
    modelName:"User",
    timestamps:true
})

//  column 

class User extends Model {

    // primary key of column 

    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    declare id: string;

    // userm name 

    @Column({
        type:DataType.string
    })
    declare username:string;

    // email

    @Column({
        type:DataType.string
    })
    declare email:string;

    //password 

    @Column({
        type:DataType.string
    })
    declare password:string;

}


module.exports = User 
