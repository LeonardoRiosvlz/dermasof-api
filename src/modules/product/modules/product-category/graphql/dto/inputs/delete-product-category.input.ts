import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteProductCategoryInput {
  @Field(() => ID, )  entityId: string;
}
