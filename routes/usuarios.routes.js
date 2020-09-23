const express = require('express');
const router = express.Router();

const {
    nuevoUsuario,
    usuariosList,
    usuarioDelete
} = require ('../controllers/usuarios.controller');

/**
 * Ruta que agrega un pedido al carrito.
 */
router.post('/new', nuevoUsuario);

/**
 * Ruta que agrega un pedido al carrito.
 */
router.get('/list', usuariosList);

/**
 * Ruta que elimina un usuario de la lista.
 */
router.post('/delete', usuarioDelete);
module.exports = router;