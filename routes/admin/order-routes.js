const express = require("express");

const {
  getAllOrdersOfAllUsers,
  getOrderDetailsForAdmin,
  updateOrderStatus,
} = require("../../controllers/admin/order-controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: AdminOrders
 *   description: API endpoints for managing orders as an admin
 */

/**
 * @swagger
 * /api/admin/orders/get:
 *   get:
 *     summary: Get all orders of all users
 *     tags: [AdminOrders]
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
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "64a24b3b4f1c2a3d4e5f6g7h"
 *                       orderStatus:
 *                         type: string
 *                         example: "Pending"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-11-24T10:30:00.000Z"
 */
router.get("/get", getAllOrdersOfAllUsers);

/**
 * @swagger
 * /api/admin/orders/details/{id}:
 *   get:
 *     summary: Get order details by ID
 *     tags: [AdminOrders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "64a24b3b4f1c2a3d4e5f6g7h"
 *         description: The ID of the order
 *     responses:
 *       200:
 *         description: Successfully fetched the order details
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
 *                     _id:
 *                       type: string
 *                       example: "64a24b3b4f1c2a3d4e5f6g7h"
 *                     orderStatus:
 *                       type: string
 *                       example: "Pending"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-11-24T10:30:00.000Z"
 */
router.get("/details/:id", getOrderDetailsForAdmin);
/**
 * @swagger
 * /api/admin/orders/update/{id}:
 *   put:
 *     summary: Update order status
 *     tags: [AdminOrders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "64a24b3b4f1c2a3d4e5f6g7h"
 *         description: The ID of the order
 *       - in: body
 *         name: orderStatus
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             orderStatus:
 *               type: string
 *               example: "Shipped"
 *         description: The new status of the order
 *     responses:
 *       200:
 *         description: Order status updated successfully
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
 *                   example: "Order status is updated successfully!"
 */
router.put("/update/:id", updateOrderStatus);

module.exports = router;
