const express = require('express');
const router = express.Router();
const { updateUser, getAllPcs} = require('../../controllers/admin/a_dashboardController');


router.get('/getallpcs', getAllPcs)
router.put('/user/:id', updateUser)

module.exports = router;