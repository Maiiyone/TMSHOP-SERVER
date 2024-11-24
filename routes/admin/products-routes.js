const express = require("express");

const {
  handleImageUpload,
  addProduct,
  editProduct,
  fetchAllProducts,
  deleteProduct,
} = require("../../controllers/admin/products-controller");

const { upload } = require("../../helpers/cloudinary");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: AdminProducts
 *   description: API endpoints for managing products as an admin
 */

/**
 * @swagger
 * /api/admin/products/get:
 *   get:
 *     summary: Fetch all products
 *     tags: [AdminProducts]
 *     responses:
 *       200:
 *         description: Successfully fetched all products
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
router.get("/get", fetchAllProducts);
/**
 * @swagger
 * /api/admin/products/upload-image:
 *   post:
 *     summary: Upload an image for a product
 *     tags: [AdminProducts]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               my_file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Successfully uploaded the image
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 result:
 *                   type: object
 */
router.post("/upload-image", upload.single("my_file"), handleImageUpload);

/**
 * @swagger
 * /api/admin/products/add:
 *   post:
 *     summary: Add a new product
 *     tags: [AdminProducts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               brand:
 *                 type: string
 *               price:
 *                 type: number
 *               salePrice:
 *                 type: number
 *               totalStock:
 *                 type: number
 *               averageReview:
 *                 type: number
 *     responses:
 *       201:
 *         description: Product added successfully
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
router.post("/add", addProduct);

/**
 * @swagger
 * /api/admin/products/edit/{id}:
 *   put:
 *     summary: Edit a product
 *     tags: [AdminProducts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to edit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               brand:
 *                 type: string
 *               price:
 *                 type: number
 *               salePrice:
 *                 type: number
 *               totalStock:
 *                 type: number
 *               averageReview:
 *                 type: number
 *     responses:
 *       200:
 *         description: Product updated successfully
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
router.put("/edit/:id", editProduct);

/**
 * @swagger
 * /api/admin/products/delete/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [AdminProducts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to delete
 *     responses:
 *       200:
 *         description: Product deleted successfully
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
 *                   example: Product deleted successfully
 */
router.delete("/delete/:id", deleteProduct);

module.exports = router;
