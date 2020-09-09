const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    colores: [String],
    tamaño: [String],
    disponibilidad: {
        type: String,
        required: true
    },
    costo: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: false
    },
    negocio: {
        type: mongoose.Schema.ObjectId,
        ref: 'Negocio',
        required: true
    }
});

const Productos = mongoose.model('Producto', productoSchema);

module.exports = {
    Productos
};