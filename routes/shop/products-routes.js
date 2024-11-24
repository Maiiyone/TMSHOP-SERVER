const express = require("express");

const {
  getFilteredProducts,
  getProductDetails,
} = require("../../controllers/shop/products-controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API endpoints for managing and retrieving product information
 */

/**
 * @swagger
 * /api/shop/products/get:
 *   get:
 *     summary: Get filtered products
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: category
 *         required: false
 *         schema:
 *           type: string
 *         description: Filter by categories, separated by commas (e.g., "electronics,books")
 *       - in: query
 *         name: brand
 *         required: false
 *         schema:
 *           type: string
 *         description: Filter by brands, separated by commas (e.g., "apple,samsung")
 *       - in: query
 *         name: sortBy
 *         required: false
 *         schema:
 *           type: string
 *           enum: [price-lowtohigh, price-hightolow, title-atoz, title-ztoa]
 *           default: price-lowtohigh
 *         description: Sort products by specified criteria
 *     responses:
 *       200:
 *         description: Successfully fetched filtered products
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
 *                         example: "64a24b3b4f1c2a3d4e5f6g7p"
 *                       title:
 *                         type: string
 *                         example: "Smartphone"
 *                       price:
 *                         type: number
 *                         example: 199.99
 *                       category:
 *                         type: string
 *                         example: "electronics"
 *                       brand:
 *                         type: string
 *                         example: "Apple"
 *       500:
 *         description: Some error occurred
 */
router.get("/get", getFilteredProducts);

/**
 * @swagger
 * /api/shop/products/get/{id}:
 *   get:
 *     summary: Get details of a specific product
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product
 *     responses:
 *       200:
 *         description: Successfully fetched product details
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
 *                     title:
 *                       type: string
 *                     price:
 *                       type: number
 *                     description:
 *                       type: string
 *                     category:
 *                       type: string
 *                     brand:
 *                       type: string
 *       404:
 *         description: Product not found
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
 *                   example: "Product not found!"
 *       500:
 *         description: Some error occurred
 */
router.get("/get/:id", getProductDetails);

module.exports = router;
