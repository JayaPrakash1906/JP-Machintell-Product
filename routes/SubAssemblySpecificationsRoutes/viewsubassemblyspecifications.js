const express = require('express');
const router = express.Router();
const viewsubassemblyspecificationscontroller = require('../../controller/SubAssemblySpecificationsController/viewsubassemblyspecificationscontroller');
router.get('/:id', viewsubassemblyspecificationscontroller);

module.exports = router;