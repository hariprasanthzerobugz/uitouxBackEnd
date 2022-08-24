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

}

module.exports = {
    add, list
};
