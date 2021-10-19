import { JwtAuthenticated } from '../types/jwt-authenticated.type';
import { AuthUser } from '../types/auth-user.type';
import { Result } from '../../../core/class/result';
import { Identifier } from '../../../core/interfaces/IEntity';

export interface IJwtAuthService {

  validateUser(identifier: Identifier): Promise<Result<void>>;

  confirmUser(...args: any[]): Promise<Result<void>>;

  validateUserByJwtPayload(...args: any[]): Promise<Result<AuthUser>>;

  signIn(...args: any[]): Promise<Result<JwtAuthenticated>>;

  signUp(...args: any[]): Promise<Result<void>>;

  forgotPassword(...args: any[]): Promise<Result<void>>;

  changePassword(...args: any): Promise<Result<void>>;

  getJwt(...args: any): Promise<Result<string>> | Result<string>;

}