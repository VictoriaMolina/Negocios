const express = require('express');
const router = express.Router();

const {
    agregarPedido,
    actualizarEstatus,
    agregarComentario,
    pedidosLista,
    estatusLista
    
} = require ('../controllers/pedido.controller');
/**
 * Ruta que agrega un pedido al carrito.
 */
router.post('/agregar', agregarPedido);

/**
 * Ruta que actualiza el estatus del pedido.
 */
router.post('/estatus', actualizarEstatus);

/**
 * Ruta que agrega uncomentario al pedido.
 */
router.post('/comentario', agregarComentario);

/**
 * Ruta que muestra lista de pedidos.
 */
router.get('/list', pedidosLista);

router.get('/status', estatusLista);

module.exports = router;