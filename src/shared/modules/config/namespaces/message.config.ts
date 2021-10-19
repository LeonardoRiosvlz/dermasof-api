import { registerAs } from '@nestjs/config';
import * as Joi from '@hapi/joi';

export const messageConfig = registerAs('message', () => ({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  email: process.env.SMTP_EMAIL,
  password: process.env.SMTP_PASSWORD,
  emailValidationUrl: process.env.EMAIL_VALIDATION_URL
}));

export const messageSchema = {
  SMTP_PORT: Joi.number().valid(25, 465, 2525, 8025, 587, 8465, 443).required(),
  SMTP_EMAIL: Joi.string().required(),
  SMTP_HOST: Joi.string().required(),
  SMTP_PASSWORD: Joi.string().required(),
  EMAIL_VALIDATION_URL: Joi.string().required()
};
