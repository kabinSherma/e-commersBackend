import type { Router } from "express"
const express =require('express')
const ProductController =require('../controllers/productContorllre')
// const AuthMiddleware =require ('../middlewares/authMiddleware')
const {AuthMiddleware,Role} =require ('../middlewares/authMiddleware')
const {multer,storage} =require("../middlewares/multerMiddleware")

const upload = multer({storage:storage})

const router:Router = express.Router()


router.route("/admin/addProduct")

.post( AuthMiddleware.isAuthenticated, AuthMiddleware.restrictTo([Role.admin]),upload.single("image"),  ProductController.addProduct)

module.exports= router