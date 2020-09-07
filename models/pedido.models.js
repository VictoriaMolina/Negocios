const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({

    usuario: {
        type: mongoose.Schema.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    productos: {
        id: {
            type: mongoose.Schema.ObjectId,
            ref: 'Productos',
            required: true
        }
    },
    cantidad: {
        type: Number,
        default: 1
    }
});

const Pedidos = mongoose.model('Pedido', pedidoSchema);

module.exports = {
    Pedidos
};