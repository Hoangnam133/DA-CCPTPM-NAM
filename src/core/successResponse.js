const StatusCode = {
  OK: 200,
  CREATE: 201,
};

class OK extends SuccessResponse {
  constructor(message, metaData) {
    super({ message, metaData });
  }
}

module.exports = {
  OK,
  CREATE,
  SuccessResponse,
};
