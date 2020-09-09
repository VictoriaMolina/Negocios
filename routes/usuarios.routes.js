const express = require('express');
const router = express.Router();

const {
    nuevoUsuario,
    usuariosList
} = require ('../controllers/usuarios.controller');

/**
 * Ruta que agrega un pedido al carrito.
 */
router.post('/new', nuevoUsuario);

/**
 * Ruta que agrega un pedido al carrito.
 */
router.get('/list', usuariosList);

module.exports = router;