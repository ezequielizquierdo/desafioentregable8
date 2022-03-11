const fs = require("fs");
const data = fs.readFileSync("./data/productos.json");

const idGenerate = (array) => {
  return array.length + 1;
};

class Producto {
  constructor(id, title, price, url) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.url = url;
  }

  //    Método save

  save = (req) => {
    try {
      const { title, price, url } = req.body;
      const nuevoProducto = new Producto();
      nuevoProducto.id = idGenerate(products);
      nuevoProducto.title = title;
      nuevoProducto.price = price;
      nuevoProducto.url = url;

      productos.push(nuevoProducto);
      const json_productos = JSON.stringify(productos);
      fs.writeFileSync("./data/productos.json", json_productos, "utf-8");
      return nuevoProducto;
    } catch (error) {
      throw "Error: Producto";
    }
  };

  //   Método getAll

  getAll = () => {
    return productos;
  };

  // Método findById

  findById = (id) => {
    const producto = productos.filter((producto) => producto.id == id);
    if (producto != "") {
      return producto;
    } else {
      throw "Producto no encontrado";
    }
  };

  // Método deleteById

  deleteById = (id) => {
    const findId = this.findById(id);
    if (findId != "") {
      productos = productos.filter((producto) => producto.id !== id);
      const json_productos = JSON.stringify(productos);
      fs.writeFileSync("./data/productos.json", json_productos, "utf-8");
    } else {
      throw "No se encontró el ID";
    }
  };

  // Método remove

  remove = (id) => {
    const buscar = this.findById(id);

    if (buscar) {
      productos = productos.filter((producto) => producto.id != id);
      const json_productos = JSON.stringify(productos);
      fs.writeFileSync("./data/productos.json", json_productos, "utf-8");
    } else {
      throw "No se encontró el producto";
    }
  };

  // Método update

  update = async (req) => {
    const id = req.params.id;
    const { title, price, url } = req.body;
    try {
      let buscar = productos.find((el) => (el.id = id));
      if (buscar.id === id) {
        buscar.title = title;
        buscar.price = price;
        buscar.url = url;
        this.remove(id);
        productos.push(buscar);
        const json_productos = JSON.stringify(productos);
        fs.writeFileSync("./data/productos.json", json_productos, "utf-8");
        return buscar;
      }
    } catch (error) {
      throw "Error server";
    }
  };

  // Método deleteAll

  deleteAll = () => {
    productos = [];
    const json_productos = JSON.stringify(productos);
    fs.writeFileSync("./data/productos.json", json_productos, "utf-8");
  };
}

module.exports = {
  Producto,
};
