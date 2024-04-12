const express = require('express');
const router = express.Router();
const DeleteProductspecsController = require('../../controller/ProductSpecsController/deleteproductspecscontroller');
router.delete('/:id', DeleteProductspecsController);

module.exports = router;