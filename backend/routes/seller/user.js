const express = require('express');
const router = express.Router();
const { getUsers } = require('../../controllers/seller/userController');

// GET /api/user
router.get('/', getUsers);

module.exports = router;