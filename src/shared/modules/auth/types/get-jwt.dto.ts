import { AuthRole } from './auth-user.type';

export type GetJwtDto = {
  userId: string;
  roles: Array<AuthRole>;
  email: string;
  username: string;
}
