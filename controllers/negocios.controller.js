const { Negocios } = require('../models/negocios.models');

/**
 * Funcion que crea un negocio nuevo.
 * @param {*} req 
 * @param {*} res 
 */
async function nuevoNegocio(req, res){
    const body = req.body
    const producto = req.body.producto;

    if(body.coo && body.tipo){
        try{
            const nuevoNegocio = await Negocios({
                coordenadas: body.coo,
                tipo: body.tipo,
                producto: producto
            }).save();

            if(nuevoNegocio) {
                res.json({'data': nuevoNegocio});
            } else {
                res.status(500).send("ERROR GUARDANDO EL NEGOCIO.")
            }
        }catch(err){
            console.log(err);
            res.status(500).send("ERROR GUARDANDO EL NEGOCIO");
        }
    } else {
        res.status(402).send("PARAMETROS ERRONEOS.")
    }
};

/**
 * Función que muestra una lista de negocios.
 */
async function negociosList(req, res){
    try{
        const list = await Negocios.find({});
        if(list){
            res.json({
                'data': list
            });
        } else {
            res.json({
                'data': {}
            });
        }
    }catch(err){
        console.log(err);
        res.json({
            'data': {}
        });
    }
};

/**
 * Función que actualiza la información de los negocios.
 */
async function negocioUpdate(req, res){
    const negocio = req.body.id;

    try{
        if(negocio){
            await Negocios.updateOne({
                _id: negocio
            }, {
                $set: {
                    tipo: "Tienda de Abarrotes"
                }
            });

            res.status(200).send("Actualización exitosa.")
        } else {
            res.status(402).send("PARAMETROS ERRONEOS.")
        };
    }catch(err){
        console.log(err);
        res.status(500).send("ERROR");
    }
};

/**
 * Función que elimina un negocio de la lista.
 */
async function negocioDelete(req, res){
    const negocioId = req.body.id;

    if(negocioId){
        try{
            const results = await Negocios.deleteOne();

            if(results){
                res.json({'data': results});
            } else {
                res.status(500).send("ERROR ELIMINANDO.");
            }
        }catch(err){
            console.log(err);
            res.status(500).send("ERROR ELIMINANDO");
        }
    } else {
        res.status(402).send("PARAMETROS ERRONEOS");
    }
}
module.exports = {
    nuevoNegocio,
    negociosList,
    negocioUpdate,
    negocioDelete
};