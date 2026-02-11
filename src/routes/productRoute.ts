import type { Router } from "express"
const express =require('express')
const ProductController =require('../controllers/productContorllre')


const router:Router = express.Router()


router.route("/addProduct").post(

    ProductController.addProduct)

module.exports= router