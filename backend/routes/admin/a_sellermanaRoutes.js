const express = require('express');
const router = express.Router();
const { getAllPcs, forceReturnPc, deletePcById, getSellersWithStats } = require('../../controllers/admin/a_sellermanaController');

router.get('/all', getAllPcs);
router.get('/sellers', getSellersWithStats);
router.post('/force-return/:id', forceReturnPc);
router.delete('/:id', deletePcById);

module.exports = router;
