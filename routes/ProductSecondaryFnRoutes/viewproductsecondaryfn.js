const express = require('express');
const router = express.Router();
const viewproductsecondaryfncontroller = require('../../controller/ProductSecondaryFnController/viewproductsecondaryfncontroller');
router.get('/:id', viewproductsecondaryfncontroller);

module.exports = router;