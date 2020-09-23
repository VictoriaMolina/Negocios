const {Productos} = require('../models/productos.models');

/**
 * Funcion que crea un producto nuevo.
 * @param {*} req - Request Object
 * @param {*} res - request Object
 */
async function nuevoProducto(req, res){
    const body = req.body;
    const negocio = req.body.negocio;

    if(body.nom && body.desc && body.img && body.costo && body.disp){
        try{
            const nuevoProducto = await new Productos({
                nombre: body.nom,
                descripcion: body.desc,
                imagen: body.img,
                costo: body.costo,
                disponibilidad: body.disp,
                colores: body.colores ? body.colores : "",
                tamaño: body.tamaño ? body.tamaño : "",
                negocio: negocio
            }).save();

            if(nuevoProducto) {
                res.json({'data': nuevoProducto});
            } else {
                res.status(500).send("ERROR CREANDO NUEVO PRODUCTO");
            }
    
        } catch(err){
            console.log(err)
            res.status(500).send("ERROR CREANDO NUEVO PRODUCTO");
        }
        
    }else {
        res.status(402).send("PARAMETROS ERRONEOS");
    }

};

/**
 * Funcion que muestra una lista de productos.
 * @param {*} req - Request Object
 * @param {*} res - request Object
 */
async function productoList(req, res){
    const negocio = req.query.negocio;
    try{
        const results = await Productos.find({
            negocio: negocio
        }).select({nombre: 1, descripcion:1, imagen:1, costo:1});
        if(results){
            res.json({
                'data': results
            });
        } else {
            res.json({
                'data': {}
            });
        }

        
    }catch(err){
        res.json({
            'data': {}
        });
    }
};

/**
 * Funcion que muestra la información de cada producto.
 * @param {*} req - Request Object
 * @param {*} res - request Object
 */
async function productoInfo(req, res){
    const productoId = req.query.pid;

    if(productoId) {
        try{
            const results = await Productos.findOne({
                _id: productoId
            });
                
            if(results){
                res.json({
                    'data': results
                });
            } else {
                res.json({
                    'data': {}
                });
            }
    
            
        }catch(err){
            res.json({
                'data': {}
            });
        }

    } else {
        res.status(402.).send("PARAMETROS ERRONEOS")
    }
    
};

/**
 * Función que actualiza información de los productos.
 * @param {*} req 
 * @param {*} res 
 */
async function productoUpdate(req, res){
    const updateId = req.body.id;
    const nombre = req.body.nom;
    const descripcion = req.body.desc;
    const imagen = req.body.img;
    const costo = req.body.costo;
    const disponibilidad = req.body.disp;
    const megocio = req.body.negocio;

        try{

            if(updateId){
                await Productos.updateOne({
                    _id: updateId
                }, {

                    $set: {
                        nombre: nombre,
                        descripcion: descripcion,
                        imagen: imagen,
                        costo: costo,
                        disponibilidad: disponibilidad,
                        negocio: negocio
                    }
                });

                res.status(200).send("Actualización exitosa.")
            } else {
                res.status(402).send("PARAMETROS ERRONEOS")
                };

        }catch(err){
            res.status(500).send("ERROR")
            console.log(err);
        }       
};

/**
 * Función que elimina productos.
 * @param {*} req 
 * @param {*} res 
 */
async function productoDelete(req, res){
    const productoId = req.body.id;

    if(productoId) {
        try{
            const results = await Productos.deleteOne({
                _id: productoId
            });

            if(results) {
                res.json({'data': results});
            } else {
                res.status(500).send("ERROR ELIMINANDO");
            }

        }catch(err){
            res.status(500).send("ERROR ELIMINANDO");
        }

    } else {
        res.status(402.).send("PARAMETROS ERRONEOS")
    }
    
};

module.exports = {
    nuevoProducto,
    productoList,
    productoInfo,
    productoUpdate,
    productoDelete
};