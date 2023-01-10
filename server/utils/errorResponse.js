class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }

  send() {}
}

module.exports = ErrorResponse;
