const express = require("express");

const {
  addProductReview,
  getProductReviews,
} = require("../../controllers/shop/product-review-controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: ProductReviews
 *   description: API endpoints for managing product reviews
 */

/**
 * @swagger
 * /api/shop/review/add:
 *   post:
 *     summary: Add a review for a product
 *     tags: [ProductReviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 example: "64a24b3b4f1c2a3d4e5f6g7p"
 *               userId:
 *                 type: string
 *                 example: "64a24b3b4f1c2a3d4e5f6g7h"
 *               userName:
 *                 type: string
 *                 example: "John Doe"
 *               reviewMessage:
 *                 type: string
 *                 example: "Great product, highly recommend!"
 *               reviewValue:
 *                 type: number
 *                 example: 5
 *     responses:
 *       201:
 *         description: Review added successfully
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
 *                     productId:
 *                       type: string
 *                     userId:
 *                       type: string
 *                     userName:
 *                       type: string
 *                     reviewMessage:
 *                       type: string
 *                     reviewValue:
 *                       type: number
 *       400:
 *         description: User already reviewed this product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "You already reviewed this product!"
 *       403:
 *         description: User has not purchased the product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "You need to purchase product to review it."
 *       500:
 *         description: Some error occurred
 */
router.post("/add", addProductReview);

/**
 * @swagger
 * /api/shop/review/{productId}:
 *   get:
 *     summary: Get reviews for a product
 *     tags: [ProductReviews]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *           example: "64a24b3b4f1c2a3d4e5f6g7p"
 *     responses:
 *       200:
 *         description: Successfully fetched product reviews
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
 *                       userId:
 *                         type: string
 *                       userName:
 *                         type: string
 *                       reviewMessage:
 *                         type: string
 *                       reviewValue:
 *                         type: number
 *       500:
 *         description: Some error occurred
 */
router.get("/:productId", getProductReviews);

module.exports = router;
