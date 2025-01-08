class ApiError extends Error {
    constructor(
        statusCode,
        message = "Soemething went wrong",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.statusCosde = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if(stack){
            this.stack = stack
        } else {
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}