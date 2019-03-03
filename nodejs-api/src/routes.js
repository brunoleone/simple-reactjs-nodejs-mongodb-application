const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

/** Roteamento */
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.story);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

// Exportando modulo
module.exports = routes;