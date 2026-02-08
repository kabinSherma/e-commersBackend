

type DataBase = { 
    host:string,
    user:string,
    password:string,
    dbName:string,
    dialect: "mysql" | "postgres" | "sqlite",
    pool:{
        min:number,
        max:number,
        idel:number,
        acquire:number,
    }


}


const dbConfig:DataBase ={

    host:"localhost",
    user:"root",
    password:"",
    dbName:"backendEcommers",
    dialect: "mysql",
    pool:{
        min:0,
        max:5,
        idel:10000,
        acquire:10000
    }
}

module.exports = dbConfig
