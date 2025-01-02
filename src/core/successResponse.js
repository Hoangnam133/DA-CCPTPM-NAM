const StatusCode = {
    OK: 200,
    CREATE: 201,
};

class CREATE extends SuccessResponse {
    constructor(message, statusCode = StatusCode.CREATE, reasonStatusCode = ReasonStatusCode.CREATE, metaData) {
        super({ message, statusCode, reasonStatusCode, metaData })
    }
}
class OK extends SuccessResponse {
    constructor(message, metaData) {
        super({ message, metaData })
    }
}

module.exports = {
    OK,
    CREATE,
    SuccessResponse,
};
