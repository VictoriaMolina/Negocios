const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema ({
    producto: {
        type: mongoose.Schema.ObjectId,
        ref: 'Productos',
        required: true,
    },
    cantidad: {
        type: Number,
        default: 1
    }
});

const pedidoSchema = new mongoose.Schema({

    usuario: {
        type: mongoose.Schema.ObjectId,
        ref: 'Usuarios',
        required: true
    },
    productos:[productoSchema],
    estatus: {
        type: String,
        values: ["Pendiente", "Listo", "Preparando", "En proceso", "Listo para entrega"],
        default: "En proceso"
    },
    comentario: {
        type: String,
        required: true
    }
});

const Pedidos = mongoose.model('Pedido', pedidoSchema);

module.exports = {
    Pedidos
};