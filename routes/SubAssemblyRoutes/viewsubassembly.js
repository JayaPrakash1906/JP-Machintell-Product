const express = require('express');
const router = express.Router();
const viewsubassemblycontroller = require('../../controller/SubAssemblyController/viewsubassemblycontroller');
router.get('/:id', viewsubassemblycontroller);

module.exports = router;