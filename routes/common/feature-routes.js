const express = require("express");

const {
  addFeatureImage,
  getFeatureImages,
} = require("../../controllers/common/feature-controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: FeatureImages
 *   description: API endpoints for managing feature images
 */

/**
 * @swagger
 * /api/common/feature/add:
 *   post:
 *     summary: Add a new feature image
 *     tags: [FeatureImages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 description: The URL or base64 encoded image
 *                 example: "https://example.com/image.jpg"
 *     responses:
 *       201:
 *         description: Feature image added successfully
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
 *                     image:
 *                       type: string
 *                       example: "https://example.com/image.jpg"
 *       500:
 *         description: Some error occurred
 */
router.post("/add", addFeatureImage);

/**
 * @swagger
 * /api/common/feature/get:
 *   get:
 *     summary: Get all feature images
 *     tags: [FeatureImages]
 *     responses:
 *       200:
 *         description: Successfully fetched all feature images
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
 *                       image:
 *                         type: string
 *                         example: "https://example.com/image.jpg"
 *       500:
 *         description: Some error occurred
 */
router.get("/get", getFeatureImages);

module.exports = router;
