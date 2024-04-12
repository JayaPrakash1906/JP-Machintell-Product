const express = require('express');
const router = express.Router();
const viewsubassemblysecfncontroller = require('../../controller/SubAssemblySecFnController/viewsubassemblysecfncontroller');
router.get('/:id', viewsubassemblysecfncontroller);

module.exports = router;