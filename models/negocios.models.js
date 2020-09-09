const mongoose = require('mongoose');

const negocioSchema = new mongoose.Schema({

    latitud: {
        type: String,
        required: true
    },
    longitud: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    }
});

const Negocios = mongoose.model('Negocio', negocioSchema);

module.exports = {
    Negocios
};