const user =require('../database/models/userModels');
const bcrypt =require('bcrypt')


const adminSeeding =async():Promise<void>=>{

    const [Data] = await user.findAll({
        where:{
            email : "p2admin@gmail.com"
        }
    })

    if(!Data){
        await user.create({
            username:"p2Admin",
            email : "p2admin@gmail.com" ,
            role : "admin",
            password : bcrypt.hashSync("p2passsword",8)
        })
        console.log("Admin credentials seeded successfully")
    }
    else {
         console.log("Admin credentials already seeded")
    }
}

module.exports= adminSeeding