const express = require('express');
const router = express.Router();
const viewsubassemblycomponentscontroller = require('../../controller/SubAssemblyComponentsController/viewsubassemblycomponentscontroller');
router.get('/:id', viewsubassemblycomponentscontroller);

module.exports = router;