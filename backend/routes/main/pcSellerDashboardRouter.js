const express = require('express')
const router = express.Router()
const { getSellerProfile, updateSellerProfile } = require('../../controllers/main/pcSellerDashboardController')

router.get('/profile/:userId', getSellerProfile)
router.post('/profile/:userId', updateSellerProfile)
module.exports = router
