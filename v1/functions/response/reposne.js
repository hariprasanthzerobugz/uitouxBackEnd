const responseObject = (statusCode, status, message, data = '') => ({
    statusCode,
    status,
    message,
    data
})
const catchError = error => {
    return {
        error: { statusCode: 400, status: false, message: error.message, error: error }
    }
}
const response = (res, statusCode, status, message, data = '') => res.status(statusCode).send(responseObject(statusCode, status, message, data))

module.exports = {
    responseObject, response, catchError
};
