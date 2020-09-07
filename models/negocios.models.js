const mongoose = require('mongoose');

const negocioSchema = new mongoose.Schema({

    coordenadas: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    productos: {
        id: {
            type: mongoose.Schema.ObjectId,
            ref: 'Productos',
            required: true
        }
    }
});

const Negocios = mongoose.model('Negocio', negocioSchema);

module.exports = {
    Negocios
};