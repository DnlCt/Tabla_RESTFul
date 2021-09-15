const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

router.get('/:n1/:n2', controller.suma);
router.post('/', controller.resta);
router.put('/', controller.multiplicacion);
router.patch('/', controller.division);
router.delete('/:n1/:n2', controller.potencia);

module.exports = router;
