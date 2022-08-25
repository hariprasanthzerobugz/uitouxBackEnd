const { catchError, responseObject } = require("../functions/response/reposne")
const productSchema = mongoose.model('product')

const add = async ({body = {}}) => {
    const {name, type, sku, reviewCount, price, star, picture} = body
    const data = { name, type, sku, reviewCount, price, star, picture }
    const addData = await productSchema.create(data).catch(err => catchError(err))
    if(!addData) return await responseObject(200, false, 'Products Added Failed')
    if(addData) return await responseObject(200, true, 'Product Added Successfully')
}

const list = async ({body = {}}) => {
    const {type} = body
    const listData = await productSchema.find({type, isDeleted: 0}).catch(err => catchError(err))
    if(!listData.length) return await responseObject(200, false, type+'Product Not Found')
    if(listData.length) return await responseObject(200, true, type+'Product', listData)
}

module.exports = {
    add, list
};
