const ErrorResponse = require('../ultis/ErrorResponse')

const errorHandler = function(req, res, next) {
    if (res.status === 11000) {
        return next(new ErrorResponse('truong da ton tai', 401))
    }
    if (res.status.name === "ValidationError") {
        return next(new ErrorResponse('khong duoc de trong', 401))

    }
}

module.exports = errorHandler