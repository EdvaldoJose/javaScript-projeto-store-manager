const Joi = require('joi');
const status = require('../utils/status');

const productCheck = Joi.object({
  name: Joi.string().min(5).required(),
})
  .required()
  .messages({
    'any.required': '{#label} is required',
    'string.empty': '{#label} is required',
    'string.min': '{#label} length must be at least 5 characters log',
  });

const salesCheck = Joi.object({
  productId: Joi.number().integer().required(),
  quantity: Joi.number().integer().min(1).required(),
})
  .required()
  .messages({
    'any.required': '{#label} is required',
    'number.exist': '{#label} not found',
    'number.min': '{#label} must be greater than or equal to 1',
  });
const validateName = async (req, res, next) => {
  const { name } = req.body;
  const { error } = productCheck.validate({ name });
  if (error) {
    return res
      .status(status[error.details[0].type])
      .json({ message: error.details[0].message });
  }
  next();
};

const validateSale = async (req, res, next) => {
  const array = req.body;
  const objSale = array.find((item) => salesCheck.validate(item).error);
  if (objSale) {
    const { error } = salesCheck.validate(objSale);
    if (error) {
      return res
        .status(status[error.details[0].type])
        .json({ message: error.details[0].message });
    }
  }
  next();
};

module.exports = {
  validateName,
  validateSale,
};