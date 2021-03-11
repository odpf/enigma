import * as Joi from 'joi';

export const createPayload = Joi.object()
  .keys({
    name: Joi.string().required(),
    abbreviation: Joi.string().required(),
    description: Joi.string(),
    labels: Joi.object().pattern(Joi.string(), Joi.string()),
    fields: Joi.object({
      measures: Joi.array().items(Joi.string()),
      dimensions: Joi.array().items(Joi.string()),
      filters: Joi.array().items(Joi.any())
    })
  })
  .options({
    abortEarly: false,
    stripUnknown: true
  });

const metricResponse = Joi.object({
  urn: Joi.string(),
  name: Joi.string().required(),
  abbreviation: Joi.string().required(),
  description: Joi.string()
}).unknown(true);

export const createResponse = Joi.object({
  data: metricResponse
});
