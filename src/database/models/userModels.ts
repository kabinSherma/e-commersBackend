require('reflect-metadata')
const {
    Table,
    Column,
    Model,
    DataType
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
        type:DataType.STRING
    })
    declare username:string;

    // email

    @Column({
        type:DataType.STRING
    })
    declare email:string;

    //password 

    @Column({
        type:DataType.STRING
    })
    declare password:string;

    //  role

    @Column ({
        type:DataType.ENUM( "customer","admin" ),
        defaultValue:'customer',
        validate: {
        isIn: [["customer", "admin"]]
        }
    })
    declare role:string
}


module.exports = User 
