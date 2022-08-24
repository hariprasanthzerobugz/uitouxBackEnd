const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const { productTypes } = require('../functions/variables/variables');
 
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    type: {
        type: String,
        enum: {
            values: [...productTypes],
            message: '{VALUE} is not supported'
        },
        required: [true, 'name is required'],
    },
    sku: {
        type: String,
    },
    reviewCount: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    orginalPrice: {
        type: Number,
        default: 0
    },
    star: {
        type: Number,
        default: 0
    },
    picture: {
        type: String,
        default: 0
    },
    isDeleted: {
        type: Number,
        default: 0
    }
})
 
schema.plugin(timestamps);
const product = new mongoose.model('product', schema);
module.exports = product;
