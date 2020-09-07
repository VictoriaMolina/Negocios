const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    carrito: [
        {
            type: mongoose.Schema.ObjectId, ref: "Pedido",
            cantidad: {
                type: Number,
                required: true
            }
        }
    ]
});

const Usuarios = mongoose.model('Usuario', usuarioSchema);

module.exports = {
    Usuarios
};