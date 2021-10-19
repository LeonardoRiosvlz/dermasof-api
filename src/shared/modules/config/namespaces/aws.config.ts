import { registerAs } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { IAWSConfig } from '../interfaces/IAWSConfig';

export const awsConfig = registerAs('aws', (): IAWSConfig => ({
  keyId: process.env.AWS_ACCESS_KEY_ID,
  keySecret: process.env.AWS_SECRET_ACCESS_KEY,
  bucket: process.env.AWS_BUCKET,
  region: process.env.AWS_DEFAULT_REGION,
  cdnUrl: process.env.AWS_CDN_URL
}));

export const awsSchema = {
  AWS_ACCESS_KEY_ID: Joi.string().required(),
  AWS_SECRET_ACCESS_KEY: Joi.string().required(),
  AWS_BUCKET: Joi.string().required(),
  AWS_DEFAULT_REGION: Joi.string().required(),
  AWS_CDN_URL: Joi.string().required()
};
