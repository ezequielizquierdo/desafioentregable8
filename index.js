// ** Persistencia en memoria sigifica que implementemos nuestra API
// ** Para guardarlos uso un array para que persistan en la memoria (se guarden)

// Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. En detalle, que incorpore las siguientes rutas:
// GET '/api/productos' -> devuelve todos los productos.
// GET '/api/productos/:id' -> devuelve un producto según su id.
// POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
// DELETE '/api/productos/:id' -> elimina un producto según su id.

const express = require("express");
const productosRouter = require("./routes/productosRouter");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", productosRouter);

const server = app.listen(PORT, () => {
  console.log("servidor levantado en el puerto: " + server.address().port);
});

server.on("error", (error) => console.log(`hubo un error ${error}`));
