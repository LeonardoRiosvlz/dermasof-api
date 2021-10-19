import { Field, ObjectType, ID } from '@nestjs/graphql';


@ObjectType()
export class EntityFieldsResponse {
  @Field(() => String) field: string;
  @Field(() => String) value: string;
}


@ObjectType()
export class SolvedEntityResponse {
  @Field(() => ID) id: string;
  @Field(() => String, { nullable: true }) entityName?: string;
  @Field(() => String, { nullable: true }) identifier?: string;
  @Field(() => [EntityFieldsResponse], { nullable: true }) fields?: Array<EntityFieldsResponse>;

}

