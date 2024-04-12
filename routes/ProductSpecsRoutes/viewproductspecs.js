const express = require('express');
const router = express.Router();
const viewproductspecscontroller = require('../../controller/ProductSpecsController/viewproductspecscontroller');
router.get('/:id', viewproductspecscontroller);

module.exports = router;