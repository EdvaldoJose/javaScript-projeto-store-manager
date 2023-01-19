const status = {
  'any.required': 400,
  'string.empty': 400,
  'number.min': 422,
  'string.min': 422,
  'number.exist': 404,
  HTTP_GET_OK: 200,
  HTTP_OK: 201,
  HTTP_INSERT_OK: 201,
  NOT_FOUND: 404,
  NOT_UPDATED: 404,
  HTTP_DELETE_OK: 204,
};

module.exports = status;
