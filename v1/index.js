const express = require('express');
const router = express.Router();

router.use('/product', require('./product/product.routes'))
 
module.exports = router;