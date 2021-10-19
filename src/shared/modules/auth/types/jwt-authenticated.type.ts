import { AuthUser,AuthRole } from './auth-user.type';


export type JwtAuthenticated = {
  user: AuthUser;
  roles: Array<AuthRole>;
  providerData: {
    thirdPartyId: string,
    provider: string,
  };
  access_token: string;
}
