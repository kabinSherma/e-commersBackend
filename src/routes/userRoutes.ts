import type { Router } from 'express'
const  express = require('express')
const AuthController = require('../controllers/userController')
const router:Router = express.Router()


router.route("/register")
.post(AuthController.registerUser)




module.exports =  router