const Joi = require('joi');

const schemaCharacter = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El campo "id" es obligatorio.',
        'number.base': 'El campo "id" debe ser un número.',
    }),
    nombre: Joi.string().required().messages({
        'any.required': 'El campo "nombre" es obligatorio.',
        'string.base': 'El campo "nombre" debe ser una cadena de texto.',
    }),
    altura: Joi.string().required().messages({
        'any.required': 'El campo "altura" es obligatorio.',
        'string.base': 'El campo "altura" debe ser una cadena de texto.',
    }),
    masa: Joi.string().required().messages({
        'any.required': 'El campo "masa" es obligatorio.',
        'string.base': 'El campo "masa" debe ser una cadena de texto.',
    }),
    color_de_cabello: Joi.string().required().messages({
        'any.required': 'El campo "color_de_cabello" es obligatorio.',
        'string.base': 'El campo "color_de_cabello" debe ser una cadena de texto.',
    }),
    color_de_piel: Joi.string().required().messages({
        'any.required': 'El campo "color_de_piel" es obligatorio.',
        'string.base': 'El campo "color_de_piel" debe ser una cadena de texto.',
    }),
    color_de_ojos: Joi.string().required().messages({
        'any.required': 'El campo "color_de_ojos" es obligatorio.',
        'string.base': 'El campo "color_de_ojos" debe ser una cadena de texto.',
    }),
    año_de_nacimiento: Joi.string().required().messages({
        'any.required': 'El campo "año_de_nacimiento" es obligatorio.',
        'string.base': 'El campo "año_de_nacimiento" debe ser una cadena de texto.',
    }),
    genero: Joi.string().required().messages({
        'any.required': 'El campo "genero" es obligatorio.',
        'string.base': 'El campo "genero" debe ser una cadena de texto.',
    }),
    planeta_de_origen: Joi.string().required().messages({
        'any.required': 'El campo "planeta_de_origen" es obligatorio.',
        'string.base': 'El campo "planeta_de_origen" debe ser una cadena de texto.',
    }),
    peliculas: Joi.array().required().messages({
        'any.required': 'El campo "peliculas" es obligatorio.',
        'array.base': 'El campo "peliculas" debe ser una matriz.',
    }),
    especie: Joi.array().required().messages({
        'any.required': 'El campo "especie" es obligatorio.',
        'array.base': 'El campo "especie" debe ser una matriz.',
    }),
    vehiculos: Joi.array().required().messages({
        'any.required': 'El campo "vehiculos" es obligatorio.',
        'array.base': 'El campo "vehiculos" debe ser una matriz.',
    }),
    naves_espaciales: Joi.array().required().messages({
        'any.required': 'El campo "naves_espaciales" es obligatorio.',
        'array.base': 'El campo "naves_espaciales" debe ser una matriz.',
    }),
    creado: Joi.string().required().messages({
        'any.required': 'El campo "creado" es obligatorio.',
        'string.base': 'El campo "creado" debe ser una cadena de texto.',
    }),
    editado: Joi.string().required().messages({
        'any.required': 'El campo "editado" es obligatorio.',
        'string.base': 'El campo "editado" debe ser una cadena de texto.',
    }),
    URL: Joi.string().required().messages({
        'any.required': 'El campo "URL" es obligatorio.',
        'string.base': 'El campo "URL" debe ser una cadena de texto.',
    }),
});

module.exports = schemaCharacter;