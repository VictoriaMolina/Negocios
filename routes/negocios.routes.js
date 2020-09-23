const express = require('express');
const router = express.Router();

const {
    nuevoNegocio,
    negociosList,
    negocioUpdate,
    negocioDelete
    
} = require ('../controllers/negocios.controller');
/**
 * Ruta que crea un negocio nuevo.
 */
router.post('/new', nuevoNegocio);

/**
 * Ruta que muestra una lista de negocios.
 */
router.post('/list', negociosList);

/**
 * Ruta para actualizar datos del negocio.
 */
router.post('/update', negocioUpdate);

/**
 * Ruta que elimine un negocio de la lista.
 */
router.post('/delete', negocioDelete);

module.exports = router;