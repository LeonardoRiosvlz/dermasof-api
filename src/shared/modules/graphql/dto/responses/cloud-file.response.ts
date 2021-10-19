import { Field, ID, ObjectType, OmitType } from '@nestjs/graphql';

@ObjectType()
export class CloudFileResponse {
  @Field(() => ID) id: string;
  @Field(() => String, { nullable: true }) key?: string;
  @Field(() => String, { nullable: true }) url?: string;
}


@ObjectType()
export class CloudFileIdResponse {
  @Field(() => String) key: string;
  @Field(() => String) url: string;
}