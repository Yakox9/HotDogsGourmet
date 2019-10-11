const productoController = {};
// con esto puedo hacer consultas a la base de datos pues es el modelo
const producto = require('../models/producto');

//obtiene todos los productos
productoController.getProductos = async (req , res)=> {
    const productos = await producto.find()
    res.json(productos);
 }

//crea un producto
productoController.CreateProducto = async (req , res)=> {
    //console.log(req.body);
    const productoNew = new producto (req.body);
    await productoNew.save();
    res.json('Producto Saved');
    
}

//obtiene un solo producto con un id
productoController.getProducto = async (req , res)=> {
    const product = await producto.findById(req.params.id);
    res.json(product);
}

//editar producto
productoController.EditProducto = async (req , res)=> {
    const productUpdate = {
        name : req.body.name,
        price : req.body.price,
        desc : req.body.desc,
        type : req.body.type

    }
   const product = await producto.findByIdAndUpdate(req.params.id, {$set: productUpdate},{new: true});
   res.json({status: 'Producto Uddated'}); 
}
//eliminar producto
productoController.RemoveProducto = async (req , res)=> {
    await producto.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto Deleted'}); 
}

module.exports = productoController;