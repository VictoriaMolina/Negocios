const express = require('express');
const router = express.Router();

const {
    agregarPedido
    
} = require ('../controllers/pedido.controller');
/**
 * Ruta que agrega un pedido al carrito.
 */
router.post('/pedido', agregarPedido);

module.exports = router;