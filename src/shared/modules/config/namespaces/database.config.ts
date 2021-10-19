import { registerAs } from '@nestjs/config';
import * as Joi from '@hapi/joi';

export const databaseConfig = registerAs('database', () => ({
  connectString: process.env.DATABASE_CONNECT_STRING,
  mainDbName: process.env.MAIN_DB_NAME
}));
export const databaseSchema = {
  DATABASE_CONNECT_STRING: Joi
    .string()
    .required(),
    // .default('mongodb+srv://omartin9203:Ronaldo999@cluster0.8p4f2.mongodb.net/bitacora?retryWrites=true&w=majority'),
};
