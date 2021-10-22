import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdProductCategoryInput {
  @Field(() => ID, )  entity__Id: string;
}
