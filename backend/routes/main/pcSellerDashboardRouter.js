const express = require('express')
const router = express.Router()
const { getSellerProfile, updateSellerProfile, getPcList, updatePcInfo } = require('../../controllers/main/pcSellerDashboardController')

router.get('/profile/:userId', getSellerProfile)
router.post('/profile/:userId', updateSellerProfile)
router.get('/pc-list/:userId', getPcList)
router.patch('/pc/:pcId', updatePcInfo)
module.exports = router
