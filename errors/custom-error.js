class customErrorAPI extends Error {
    constructor(message , statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg , statusCode){
    return new customErrorAPI(msg, statusCode)
}

module.exports = {customErrorAPI , createCustomError}

class CustomErrorAPI extends Error{
    constructor(message , statusCode) {
         super(message)
         this.statusCode = statusCode
    }
}

const CreateCustomError = (msg , statusCOde){
    
}