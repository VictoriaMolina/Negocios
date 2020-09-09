const { Pedidos } = require('../models/pedido.models');

async function agregarPedido (req, res){
    const body = req.body;
    const productos = req.body.producto;
    const usuario = req.body.id;

    if(body.id && body.producto && body.cant){
        try{
            const pedido = await Pedidos({
                usuario: usuario,
                productos: [{
                    producto: productos,
                    cantidad: body.cant
                }],
                comentario: body.comentario
            }).save();

            if(pedido) {
                res.json({'data': pedido});
            } else {
                res.status(500).send("ERROR GUARDANDO EL PEDIDO.")
            }
        }catch(err) {
            console.log(err);
            res.status(500).send("ERROR GUARDANDO EL PEDIDO");
        }
    } else {
        res.status(402).send("PARAMETROS ERRONEOS.")
    }
};

/**
 * Función que agrega comentarios en los pedidos.
 * @param {*} req 
 * @param {*} res 
 */
async function agregarComentario(req, res){
    const pedidoId = req.body.pid;
    const comentario = req.body.comentario;

    if (pedidoId) {
        try{
            const comentarioPedido = await Pedidos.updateOne({
                _id: comentario,
                $push: {comentario: comentario}
            });

            res.json({
                'data': comentarioPedido
            });

        }catch(err){
            console.log(err)
            res.status(500).send("ERROR")
        }
    } else {
        res.status(402).send("PARAMETROS ERRONEOS")
    }
};

/**
 * Función que actualiza el estatus de los pedidos.
 * @param {*} req 
 * @param {*} res 
 */
async function actualizarEstatus(req, res){
    const pedidoId = req.body.id;
    const estatus = req.body.estatus;

    if (pedidoId) {
        try{
            const estatusPedido = await Pedidos.updateOne({
                id: estatus,
                $set: {
                    estatus: 'Listo para entrega'
                }
            });

            res.json({
                'data': estatusPedido
            });

        }catch(err){
            console.log(err)
            res.status(500).send("ERROR")
        }
    } else {
        res.status(402).send("PARAMETROS ERRONEOS")
    }
};

async function estatusLista(req, res){
    try{
        const list = await Pedidos.find({});
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
 * Funcion que muestra una lista de pedidos.
 * @param {*} req - Request Object
 * @param {*} res - request Object
 */
async function pedidosLista(req, res){
    try{
        const list = await Pedidos.find({});
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
module.exports = {
    agregarPedido,
    actualizarEstatus,
    agregarComentario,
    pedidosLista,
    estatusLista
};
