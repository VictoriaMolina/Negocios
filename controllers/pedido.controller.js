const { Pedidos } = require('../models/pedido.models');

async function agregarPedido (req, res){
    const body = req.body;
    const producto = req.body.producto;
    const usuario = req.body.id;

    if(body.usuario && body.prod && body.cant){
        try{
            const pedido = await Pedidos({
                usuario: usuario,
                producto: producto,
                cantidad: body.cant
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

module.exports = {
    agregarPedido
};
