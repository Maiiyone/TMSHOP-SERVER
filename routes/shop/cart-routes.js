const express = require("express");

const {
  addToCart,
  fetchCartItems,
  deleteCartItem,
  updateCartItemQty,
} = require("../../controllers/shop/cart-controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: API endpoints for managing shopping cart
 */

/**
 * @swagger
 * /api/shop/cart/add:
 *   post:
 *     summary: Add an item to the cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "64a24b3b4f1c2a3d4e5f6g7h"
 *               productId:
 *                 type: string
 *                 example: "64a24b3b4f1c2a3d4e5f6g7p"
 *               quantity:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Item added to the cart successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 */
router.post("/add", addToCart);

/**
 * @swagger
 * /api/shop/cart/get/{userId}:
 *   get:
 *     summary: Fetch all items in a user's cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           example: "64a24b3b4f1c2a3d4e5f6g7h"
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: Successfully fetched all cart items
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     items:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           productId:
 *                             type: string
 *                           image:
 *                             type: string
 *                           title:
 *                             type: string
 *                           price:
 *                             type: number
 *                           salePrice:
 *                             type: number
 *                           quantity:
 *                             type: integer
 */
router.get("/get/:userId", fetchCartItems);

/**
 * @swagger
 * /api/shop/cart/update-cart:
 *   put:
 *     summary: Update the quantity of an item in the cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "64a24b3b4f1c2a3d4e5f6g7h"
 *               productId:
 *                 type: string
 *                 example: "64a24b3b4f1c2a3d4e5f6g7p"
 *               quantity:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       200:
 *         description: Successfully updated the cart item quantity
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 */
router.put("/update-cart", updateCartItemQty);

/**
 * @swagger
 * /api/shop/cart/{userId}/{productId}:
 *   delete:
 *     summary: Delete an item from the cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           example: "64a24b3b4f1c2a3d4e5f6g7h"
 *         description: The ID of the user
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *           example: "64a24b3b4f1c2a3d4e5f6g7p"
 *         description: The ID of the product
 *     responses:
 *       200:
 *         description: Successfully deleted the item from the cart
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 */
router.delete("/:userId/:productId", deleteCartItem);

module.exports = router;
