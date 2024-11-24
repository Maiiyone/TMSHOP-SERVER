const express = require("express");

const { searchProducts } = require("../../controllers/shop/search-controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Search
 *   description: API endpoint for searching products
 */

/**
 * @swagger
 * /api/shop/search/{keyword}:
 *   get:
 *     summary: Search for products by keyword
 *     tags: [Search]
 *     parameters:
 *       - in: path
 *         name: keyword
 *         required: true
 *         schema:
 *           type: string
 *         description: The keyword to search for
 *     responses:
 *       200:
 *         description: Successfully fetched search results
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
 *                       description:
 *                         type: string
 *                         example: "High-quality smartphone with great features"
 *                       category:
 *                         type: string
 *                         example: "electronics"
 *                       brand:
 *                         type: string
 *                         example: "Apple"
 *                       price:
 *                         type: number
 *                         example: 199.99
 *       400:
 *         description: Invalid keyword
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
 *                   example: "Keyword is required and must be in string format"
 *       500:
 *         description: Some error occurred
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
 *                   example: "Error"
 */
router.get("/:keyword", searchProducts);

module.exports = router;
