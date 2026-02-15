import type { Router } from "express"
const express =require('express')
const ProductController =require('../controllers/productContorllre')
// const AuthMiddleware =require ('../middlewares/authMiddleware')
const {AuthMiddleware,Role} =require ('../middlewares/authMiddleware')
const {multer,storage} =require("../middlewares/multerMiddleware")

const upload = multer({storage:storage})

const router:Router = express.Router()


// add product route

router.route("/admin/addproducts")
.post( AuthMiddleware.isAuthenticated, AuthMiddleware.restrictTo([Role.admin]),upload.single("image"),  ProductController.addProduct)

// read all products route

router.route("/products").get(ProductController.getAllProducts)

// read single product route 

router.route("/product/:id").get(ProductController.getSingleProduct)

// delete product route 

router.route('/deleteProduct/:id').delete(AuthMiddleware.isAuthenticated, AuthMiddleware.restrictTo([Role.admin]),ProductController.deleteProduct)

// edit product route

router.route("/updateProduct/:id").patch(AuthMiddleware.isAuthenticated, AuthMiddleware.restrictTo([Role.admin]),upload.single("image"), ProductController.editProduct)


module.exports= router
