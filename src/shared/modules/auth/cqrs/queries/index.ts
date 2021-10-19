import { ValidateUserByJwtQueryHandler } from './handler/validate-user-by-jwt.query.handler';
import { GetJwtQueryHandler } from './handler/get-jwt.query.handler';
export const AuthQueryHandlers = [
ValidateUserByJwtQueryHandler,
  GetJwtQueryHandler
]
