const express = require('express');
const router = express.Router();
const viewproductspecscontroller = require('../../controller/ProductSpecsController/viewproductspecscontroller');
router.delete('/:id', viewproductspecscontroller);

module.exports = router;