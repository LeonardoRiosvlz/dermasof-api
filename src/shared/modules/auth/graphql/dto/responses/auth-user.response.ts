import { Field, ObjectType } from '@nestjs/graphql';
import { AuthRoleResponse } from './auth-roles.response';
import { CloudFileResponse } from '../../../../graphql/dto/responses/cloud-file.response';



@ObjectType()
export class AuthUserResponse {
  @Field() userId: string;
  @Field() firstname: string;
  @Field() lastname: string;
  @Field() email: string;
  @Field(()=>[AuthRoleResponse]) roles: Array<AuthUserResponse>;
  @Field({ nullable: true }) username?: string;
  @Field() verified: boolean;
  @Field() isActive: boolean;
  @Field() isAdmin: boolean;
  @Field(() => CloudFileResponse, { nullable: true }) avatarFile?: CloudFileResponse;
}





