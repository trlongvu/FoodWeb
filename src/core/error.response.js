'use stric';

const { StatusCodes, ReasonPhrases } = require('../utils/httpStatusCode');

class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.status = statusCode;
  }
}

class NotFoundError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.NOT_FOUND,
    statusCode = StatusCodes.NOT_FOUND,
  ) {
    super(message, statusCode);
  }
}

class BadRequestError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.BAD_REQUEST,
    statusCode = StatusCodes.BAD_REQUEST,
  ) {
    super(message, statusCode);
  }
}

class ForbiddenError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.FORBIDDEN,
    statusCode = StatusCodes.FORBIDDEN,
  ) {
    super(message, statusCode);
  }
}

class UnauthorizedError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.UNAUTHORIZED,
    statusCode = StatusCodes.UNAUTHORIZED,
  ) {
    super(message, statusCode);
  }
}

class ConflictError extends ErrorResponse {
  constructor(
    message = ReasonPhrases.CONFLICT,
    statusCode = StatusCodes.CONFLICT,
  ) {
    super(message, statusCode);
  }
}

module.exports = {
  NotFoundError,
  BadRequestError,
  ForbiddenError,
  UnauthorizedError,
  ConflictError,
};
