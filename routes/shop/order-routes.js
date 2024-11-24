const express = require("express");

const {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
  capturePayment,
} = require("../../controllers/shop/order-controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API endpoints for managing orders
 */

/**
 * @swagger
 * /api/shop/order/create:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
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
 *               cartItems:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                       example: "64a24b3b4f1c2a3d4e5f6g7p"
 *                     title:
 *                       type: string
 *                       example: "Product Name"
 *                     price:
 *                       type: number
 *                       example: 99.99
 *                     quantity:
 *                       type: integer
 *                       example: 2
 *               addressInfo:
 *                 type: object
 *                 description: Shipping address
 *               orderStatus:
 *                 type: string
 *                 example: "Pending"
 *               paymentMethod:
 *                 type: string
 *                 example: "Paypal"
 *               paymentStatus:
 *                 type: string
 *                 example: "unpaid"
 *               totalAmount:
 *                 type: number
 *                 example: 199.98
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 approvalURL:
 *                   type: string
 *                   example: "https://sandbox.paypal.com/checkoutnow?token=ABC123"
 *                 orderId:
 *                   type: string
 */
router.post("/create", createOrder);

/**
 * @swagger
 * /api/shop/order/capture:
 *   post:
 *     summary: Capture payment for an order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paymentId:
 *                 type: string
 *                 example: "PAYID-XYZ12345"
 *               payerId:
 *                 type: string
 *                 example: "PAYER-ABC123"
 *               orderId:
 *                 type: string
 *                 example: "64a24b3b4f1c2a3d4e5f6g7o"
 *     responses:
 *       200:
 *         description: Payment captured successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Order confirmed"
 *                 data:
 *                   type: object
 */
router.post("/capture", capturePayment);

/**
 * @swagger
 * /api/shop/order/list/{userId}:
 *   get:
 *     summary: Get all orders for a user
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           example: "64a24b3b4f1c2a3d4e5f6g7h"
 *     responses:
 *       200:
 *         description: Successfully fetched all orders
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get("/list/:userId", getAllOrdersByUser);

/**
 * @swagger
 * /api/shop/order/details/{id}:
 *   get:
 *     summary: Get details of a specific order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "64a24b3b4f1c2a3d4e5f6g7o"
 *     responses:
 *       200:
 *         description: Successfully fetched order details
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
router.get("/details/:id", getOrderDetails);

module.exports = router;
