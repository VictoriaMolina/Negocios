const express = require('express');
const router = express.Router();

const {
    agregarPedido,
    actualizarEstatus,
    agregarComentario,
    usuarioLista,
    negocioLista,
    estatusLista,
    pedidoDelete
    
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
router.get('/list', usuarioLista);

/**
 * Ruta que muestra lista de pedidos.
 */
router.get('/negociolist', negocioLista);

router.get('/status', estatusLista);
/**
 * Ruta que elimine un pedido de la lista.
 */
router.post('/delete', pedidoDelete);
module.exports = router;