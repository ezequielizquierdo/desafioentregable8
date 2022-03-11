// En este archivo tengo un router para las productos

const express = require("express");
const productosRouter = express.Router();
const controller = require("../controller/productosController");

const productos = [];

// Devuelvo todos los productos
productosRouter.get("/productos", async (req, res) => {
  const response = await controller.getAll();
  res.json(response);
});

// Devuelvo un producto según su id
productosRouter.get("/productos/:id", async (req, res) => {
  const response = await controller.getProductById(req, res);
  res.json(response);
});

// Con el metodo post le permito que agregue información.
productosRouter.post("/productos", (req, res) => {
  console.log(req.body);
  productos.push(req.body);
  res.json({ mensaje: "se agrego correctamente" });
});

// Con el método put recibo y actualizo un producto según su id

// Con el método Delete, elimino un producto según su id
productosRouter.delete("/productos/:id", async (req, res) => {
  const response = await controller.deleteProducto(req, res);
  res.json(response);
});

//   Exporto el módulo de productos
module.exports = productosRouter;
