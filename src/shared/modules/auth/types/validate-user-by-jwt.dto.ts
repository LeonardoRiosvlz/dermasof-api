import { JwtPayload } from './jwt-payload.type';


export type ValidateUserByJwtDto = {
  tenant: string | null | undefined;
  payload: JwtPayload;

}
