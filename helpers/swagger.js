const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mini Ecommerce",
      description:
        "API endpoints for a ecommerce TRẦN NGỌC XUÂN MAI AND TIÊN TRẦN",
      contact: {
        name: "Chem chép Mai",
        email: "info@miniblog.com",
        url: "",
      },
      version: "1.0.0",
    },
    components: {
        securitySchemes: {
            bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT", // Optional, định rõ Bearer là JWT
            },
          },
      schemas: {
        Address: {
          type: "object",
          properties: {
            userId: {
              type: "string",
              example: "64a24b3b4f1c2a3d4e5f6g7h",
            },
            address: {
              type: "string",
              example: "123 Main Street",
            },
            city: {
              type: "string",
              example: "New York",
            },
            pincode: {
              type: "string",
              example: "10001",
            },
            phone: {
              type: "string",
              example: "1234567890",
            },
            notes: {
              type: "string",
              example: "Leave at the front door",
            },
          },
        },
        Cart: {
          type: "object",
          properties: {
            userId: {
              type: "string",
              example: "64a24b3b4f1c2a3d4e5f6g7h",
            },
            items: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  productId: {
                    type: "string",
                    example: "64a24b3b4f1c2a3d4e5f6g7p",
                  },
                  quantity: {
                    type: "number",
                    example: 2,
                  },
                },
              },
            },
          },
        },
        Feature: {
          type: "object",
          properties: {
            image: {
              type: "string",
              example: "https://example.com/image.jpg",
            },
          },
        },
        Order: {
          type: "object",
          properties: {
            userId: {
              type: "string",
              example: "64a24b3b4f1c2a3d4e5f6g7h",
            },
            cartItems: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  productId: {
                    type: "string",
                    example: "64a24b3b4f1c2a3d4e5f6g7p",
                  },
                  title: {
                    type: "string",
                    example: "Smartphone",
                  },
                  price: {
                    type: "number",
                    example: 199.99,
                  },
                  quantity: {
                    type: "number",
                    example: 2,
                  },
                },
              },
            },
            totalAmount: {
              type: "number",
              example: 399.98,
            },
            orderStatus: {
              type: "string",
              example: "Pending",
            },
          },
        },
        Product: {
          type: "object",
          properties: {
            image: {
              type: "string",
              example: "https://example.com/product.jpg",
            },
            title: {
              type: "string",
              example: "Smartphone",
            },
            description: {
              type: "string",
              example: "High-quality smartphone",
            },
            category: {
              type: "string",
              example: "Electronics",
            },
            brand: {
              type: "string",
              example: "Apple",
            },
            price: {
              type: "number",
              example: 199.99,
            },
            salePrice: {
              type: "number",
              example: 179.99,
            },
            totalStock: {
              type: "number",
              example: 50,
            },
          },
        },
        ProductReview: {
          type: "object",
          properties: {
            productId: {
              type: "string",
              example: "64a24b3b4f1c2a3d4e5f6g7p",
            },
            userId: {
              type: "string",
              example: "64a24b3b4f1c2a3d4e5f6g7h",
            },
            reviewMessage: {
              type: "string",
              example: "Great product!",
            },
            reviewValue: {
              type: "number",
              example: 5,
            },
          },
        },
        User: {
          type: "object",
          properties: {
            userName: {
              type: "string",
              example: "johndoe",
            },
            email: {
              type: "string",
              example: "johndoe@example.com",
            },
            password: {
              type: "string",
              example: "password123",
            },
            role: {
              type: "string",
              example: "user",
            },
          },
        },
      },
    },
    security: [
        {
          bearerAuth: [],
        },
      ],
    servers: [
      {
        url: "http://localhost:5000/",
        description: "Local server",
      },
      {
        url: "https://tmshop-server.onrender.com/",
        description: "Live server",
      },
    ],
  },

  apis: ["./routes/**/*.js"],
};
const swaggerSpec = swaggerJsdoc(options);
function swaggerDocs(app, port) {
  // Swagger Page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Documentation in JSON format
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
}
module.exports = { swaggerDocs };
