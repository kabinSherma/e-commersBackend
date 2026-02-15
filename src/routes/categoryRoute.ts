import type { Router} from "express"
const express =require('express')
const router:Router = express.Router()
const  { AuthMiddleware, Role}= require('../middlewares/authMiddleware')
const CategoryController= require('../controllers/categoryController')

// add category route

router.route("/admin/addcategory").post(AuthMiddleware.isAuthenticated,AuthMiddleware.restrictTo([Role.admin]),CategoryController.addProductCategory)

// readall category route

router.route("/categories").get(CategoryController.readCategories)

//delete categories route 

router.route("/admin/deletecategory/:id").delete(AuthMiddleware.isAuthenticated,AuthMiddleware.restrictTo([Role.admin]),CategoryController.deleteCategory)

module.exports = router