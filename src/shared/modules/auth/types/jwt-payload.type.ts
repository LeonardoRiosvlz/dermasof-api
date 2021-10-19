import { AuthRole } from './auth-user.type';

export type JwtPayload ={
  sub: any;
  roles: Array<AuthRole>;
  data: {
    userId: string
    email: string;
    username?: string;
  }
}
