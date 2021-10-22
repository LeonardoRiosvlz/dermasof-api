import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdServiceCategoryInput {
  @Field(() => ID, )  entity__Id: string;
}
