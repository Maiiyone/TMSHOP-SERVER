const express = require("express");

const {
  addAddress,
  fetchAllAddress,
  editAddress,
  deleteAddress,
} = require("../../controllers/shop/address-controller");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Addresses
 *   description: API endpoints for managing user addresses
 */

/**
 * @swagger
 * /api/shop/address/add:
 *   post:
 *     summary: Add a new address for a user
 *     tags: [Addresses]
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
 *               address:
 *                 type: string
 *                 example: "123 Main Street"
 *               city:
 *                 type: string
 *                 example: "New York"
 *               pincode:
 *                 type: string
 *                 example: "10001"
 *               phone:
 *                 type: string
 *                 example: "1234567890"
 *               notes:
 *                 type: string
 *                 example: "Deliver to the back door"
 *     responses:
 *       201:
 *         description: Address added successfully
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
 *                     userId:
 *                       type: string
 *                     address:
 *                       type: string
 *                     city:
 *                       type: string
 *                     pincode:
 *                       type: string
 *                     phone:
 *                       type: string
 *                     notes:
 *                       type: string
 */
router.post("/add", addAddress);

/**
 * @swagger
 * /api/shop/address/get/{userId}:
 *   get:
 *     summary: Fetch all addresses for a user
 *     tags: [Addresses]
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
 *         description: Successfully fetched all addresses
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
 *                       userId:
 *                         type: string
 *                       address:
 *                         type: string
 *                       city:
 *                         type: string
 *                       pincode:
 *                         type: string
 *                       phone:
 *                         type: string
 *                       notes:
 *                         type: string
 */
router.get("/get/:userId", fetchAllAddress);

/**
 * @swagger
 * /api/shop/address/update/{userId}/{addressId}:
 *   put:
 *     summary: Edit an existing address
 *     tags: [Addresses]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user
 *       - in: path
 *         name: addressId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the address
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               address:
 *                 type: string
 *               city:
 *                 type: string
 *               pincode:
 *                 type: string
 *               phone:
 *                 type: string
 *               notes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Address updated successfully
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
router.put("/update/:userId/:addressId", editAddress);

/**
 * @swagger
 * /api/shop/address/delete/{userId}/{addressId}:
 *   delete:
 *     summary: Delete an address for a user
 *     tags: [Addresses]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user
 *       - in: path
 *         name: addressId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the address
 *     responses:
 *       200:
 *         description: Address deleted successfully
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
 *                   example: Address deleted successfully
 */
router.delete("/delete/:userId/:addressId", deleteAddress);

module.exports = router;
