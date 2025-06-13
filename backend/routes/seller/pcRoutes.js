const express = require('express');
const router = express.Router();
const pcController = require('../../controllers/seller/pcController');

router.post('/register', pcController.createPc);
router.get('/list', pcController.getPcList);
router.put('/:pc_id', pcController.updatePc);
router.delete('/:pc_id', pcController.deletePc);
router.get('/find', pcController.findUser);
router.post('/rent', pcController.rentPc);
module.exports = router;

