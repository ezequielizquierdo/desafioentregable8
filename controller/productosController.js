const { Producto } = require("../models/Producto");

// Crear producto
createProducto = (req, res) => {
  try {
    const producto = new Producto();
    const newProducto = producto.save(req);
    return newProducto;
  } catch (error) {
    console.log("Se detectó un error", error);
  }
};

// Obtener todos los productos
getAll = () => {
  const productos = new Producto();
  return productos.getAll();
};

// Función genera un número Random
const getRandom = (max) => {
  const min = 1;
  return Math.round(Math.random() * (max - min) + min);
};

// Obtener un producto random
getProductosRandom = async () => {
  const producto = new Producto();
  const productos = await producto.getAll();
  const idRandom = getRandom(productos.length);

  return product.findById(idRandom);
};

// Obtener producto por ID
getProductoById = async (req, res) => {
  try {
    const producto = new Producto();
    return producto.findById(req.params.id);
  } catch (error) {
    console.log("Se detectó un error", error);
  }
};

// Actualizar producto
updateProducto = async (req, res) => {
  try {
    const producto = new Producto();
    const updateProducto = await producto.update(req);
    return updateProducto;
  } catch (error) {
    console.log("Se detectó un error", error);
  }
};

// Borrar producto
deleteProducto = async (req, res) => {
  try {
    const id = req.params.id;
    const producto = new Producto();
    await producto.remove(id);
    res.json({ message: "Producto Eliminado" });
  } catch (error) {
    return error;
  }
};

// Exporto los modulos
module.exports = {
  getAll,
  createProducto,
  updateProducto,
  deleteProducto,
  getProductosRandom,
  getProductoById,
};
