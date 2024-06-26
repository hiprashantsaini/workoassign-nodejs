const Joi = require('joi');

const userDto = {
    createUser: Joi.object({
        email: Joi.string().email().required(),
        name: Joi.string().required(),
        age: Joi.number().required(),
        city: Joi.string().required(),
        zipCode: Joi.string().required()
    }),
    updateUser: Joi.object({
        email: Joi.string().email(),
        name: Joi.string(),
        age: Joi.number(),
        city: Joi.string(),
        zipCode: Joi.string()
    })
};

module.exports = userDto;
