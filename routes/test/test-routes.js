const express = require("express");
const { getAllTest,getAllTest2 } = require("../../controllers/test/test-controller")

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Test
 *   description: API endpoint for searching products
 */

/**
 * @swagger
 * /test:
 *   get:
 *     summary: Test Api 1
 *     tags: [Test]
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
 *                       id:
 *                         type: number
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "Test 1"
 *                       
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
//localhost:3000/test/get
router.get('/get1', getAllTest);

//localhost:3000/test/get2
router.get('/get2', getAllTest2);
module.exports = router