import type { Router } from 'express'
const  express = require('express')
const AuthController = require('../controllers/userController')
const router:Router = express.Router()
const errorHandler =require ('../services/errorHandling')

// route register

router.route("/register")
.post(errorHandler(AuthController.registerUser))

// route login

router.route("/login").post(errorHandler(AuthController.loginUser))






module.exports =  router