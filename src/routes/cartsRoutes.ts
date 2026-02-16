import type { Router} from "express"
const express =require('express')
const router:Router = express.Router()
const  { AuthMiddleware, Role}= require('../middlewares/authMiddleware')
const CartsController= require('../controllers/cartsController')

// add to cart route

router.route("/cart").post(AuthMiddleware.isAuthenticated,CartsController.addToCart).get(AuthMiddleware.isAuthenticated,CartsController.getMyCarts)

// router.route('/cart/:id').delete(AuthMiddleware.isAuthenticated, CartsController.deleteCart)

router.route("/cart/:id").delete(AuthMiddleware.isAuthenticated , CartsController.deleteCart).patch(AuthMiddleware.isAuthenticated,CartsController.updateCart)

module.exports = router