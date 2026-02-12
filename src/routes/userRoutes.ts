import type { Router } from 'express'
const  express = require('express')
const AuthController = require('../controllers/userController')
const router:Router = express.Router()
const ProductController = require('../controllers/productContorllre')
const errorHandler =require ('../services/errorHandling')

// route register

router.route("/register")
.post(errorHandler(AuthController.registerUser))

// route login

router.route("/login").post(errorHandler(AuthController.loginUser))


router.route("/addProduct").post(

    errorHandler(ProductController.addProduct))



module.exports =  router