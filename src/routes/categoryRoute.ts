import type { Router} from "express"
const express =require('express')
const router:Router = express.Router()
const  { AuthMiddleware, Role}= require('../middlewares/authMiddleware')
const CategoryController= require('../controllers/categoryController')

// add category route

router.route("/admin/addcategory").post(AuthMiddleware.isAuthenticated,AuthMiddleware.restrictTo([Role.admin]),CategoryController.addProductCategory)

// readall category route

router.route("/categories").get(CategoryController.readCategories)

//delete and update categories route 

router.route("/admin/category/:id").delete(AuthMiddleware.isAuthenticated,AuthMiddleware.restrictTo([Role.admin]),CategoryController.deleteCategory)
.patch(AuthMiddleware.isAuthenticated,AuthMiddleware.restrictTo([Role.admin]),CategoryController.updateCategory)   

module.exports = router