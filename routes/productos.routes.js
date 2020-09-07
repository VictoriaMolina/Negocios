var express = require('express');
const router = express.Router();

const {
    nuevoProducto,
    productoList,
    productoInfo,
    productoUpdate,
    productoDelete
} = require ('../controllers/productos.controller');

/**
 * Route to create a new product
 */
router.post('/new', nuevoProducto);

/**
 * Route to get all product stored in database
 */
router.get('/list', productoList);

/**
 * Route to get all product stored in database
 */
router.get('/info', productoInfo);

/**
 * Route to get all product stored in database
 */
router.post('/update', productoUpdate);

/**
 * Route to get all product stored in database
 */
router.post('/delete', productoDelete);

module.exports = router;