import { registerAs } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { IRedisConfig } from '../interfaces/IRedisConfig';

export const redisConfig = registerAs('redis', (): IRedisConfig => ({
  host: process.env.REDIS_HOST,
  port: +process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
}));

export const redisSchema = {
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.number().required(),
  REDIS_PASSWORD: Joi.string(),
};
