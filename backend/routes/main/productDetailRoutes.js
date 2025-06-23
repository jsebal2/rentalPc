const express = require('express');
const router = express.Router();
const { getAuthorsByCpuTitle} = require('../../controllers/main/productDetailController');

router.get('/:title/authors', getAuthorsByCpuTitle);
module.exports = router;
