// products.router.js
const express = require("express");
const router = express.Router();
const productsController = require("../controller/products.controller");

router.get("/", async (req, res) => {
  try {
    await productsController.getAllProducts(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
