import type { Router } from "express"
const express =require('express')
const ProductController =require('../controllers/productContorllre')
// const AuthMiddleware =require ('../middlewares/authMiddleware')
const {AuthMiddleware,Role} =require ('../middlewares/authMiddleware')
const {multer,storage} =require("../middlewares/multerMiddleware")

const upload = multer({storage:storage})

const router:Router = express.Router()


router.route("/admin/addproducts")
.post( AuthMiddleware.isAuthenticated, AuthMiddleware.restrictTo([Role.admin]),upload.single("image"),  ProductController.addProduct)
router.route("/products").get(ProductController.getAllProducts)
router.route("/product/:id").get(ProductController.getSingleProduct)
router.route('/deleteProduct/:id').delete(AuthMiddleware.isAuthenticated, AuthMiddleware.restrictTo([Role.admin]),ProductController.deleteProduct)

router.route("/updateProduct/:id").patch(AuthMiddleware.isAuthenticated, AuthMiddleware.restrictTo([Role.admin]),upload.single("image"), ProductController.editProduct)

module.exports= router