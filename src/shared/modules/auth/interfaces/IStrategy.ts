import { AuthUser } from '../types/auth-user.type';

export interface IStrategy {
  validate(...args: any):Promise<AuthUser>
}