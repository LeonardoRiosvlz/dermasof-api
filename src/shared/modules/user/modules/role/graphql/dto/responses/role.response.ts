import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PermitsResponse } from './permits.response';


@ObjectType()
export class RoleResponse {
  @Field(() => ID) id: string;
  @Field() name: string;
  @Field({ nullable: true }) description?: string;
  @Field(()=>[PermitsResponse]) permits: Array<PermitsResponse>;
  @Field(() => Date, { nullable: true }) createdAt?: Date;
  @Field(() => Date, { nullable: true }) updatedAt?: Date;
}


