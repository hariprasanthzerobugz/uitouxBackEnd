const express = require('express');
const { body } = require('express-validator');
const { response } = require('../functions/response/reposne');
const { parallelValidate } = require('../functions/validators/validators');
const { productTypes } = require('../functions/variables/variables');
const { add } = require('./product.service');
const router = express.Router();

router.post('/add', parallelValidate([
    body('name', 'name is required').notEmpty(),
    body('type', 'type is required').notEmpty(),
    body('type').isIn(productTypes).withMessage('Invalid exam type'),
    body('sku', 'sku is required').notEmpty(),
    body('reviewCount', 'reviewCount is required').notEmpty(),
    body('price', 'price is required').notEmpty(),
    body('star', 'star is required').notEmpty(),
    body('picture', 'picture is required').notEmpty(),
]), async (req, res) => {
    add(req).then(({statusCode, status, message, data = null}) =>
        response(res, statusCode, status, message, data) )
})

 
module.exports = router;