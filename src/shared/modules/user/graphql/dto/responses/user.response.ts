import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ProfileResponse } from './profile.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { CloudFileResponse } from '../../../../graphql/dto/responses/cloud-file.response';


@ObjectType()
export class UserResponse {

  @Field(() => ID) id: string;
  @Field() email: string;
  @Field() username: string;

  @Field({ nullable: true }) lastLogin?: Date;
  @Field() firstname: string;
  @Field({ nullable: true }) lastname?: string;
  @Field(() => Boolean) verified: boolean;
  @Field(() => Boolean, { nullable: true }) isActive: boolean;
  @Field(() => Boolean, { nullable: true }) isAdmin: boolean;
  @Field(() => [SolvedEntityResponse]) roles: Array<SolvedEntityResponse>;
  @Field(() => ProfileResponse, { nullable: true }) profile?: ProfileResponse;
  @Field(() => CloudFileResponse, { nullable: true }) avatarFile?: CloudFileResponse;

  @Field(() => Date, { nullable: true }) createdAt?: Date;
  @Field(() => Date, { nullable: true }) updatedAt?: Date;

}

