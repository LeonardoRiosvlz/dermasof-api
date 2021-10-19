import { Field, ObjectType } from '@nestjs/graphql';
import { AuthUserResponse } from './auth-user.response';
import { AuthRoleResponse } from './auth-roles.response';


@ObjectType()
export class AuthProviderDataResponse {
  @Field()
  thirdPartyId: string;
  @Field()
  provider: string;
}

@ObjectType()
export class JwtAuthenticatedResponse {
  @Field(() => AuthUserResponse) user: AuthUserResponse;
  @Field(()=>[AuthRoleResponse]) roles: Array<AuthRoleResponse>;
  @Field(() => AuthProviderDataResponse) providerData: AuthProviderDataResponse;
  @Field() access_token: string;

}



