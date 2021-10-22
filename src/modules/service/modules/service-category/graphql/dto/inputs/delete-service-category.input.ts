import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteServiceCategoryInput {
  @Field(() => ID, )  entityId: string;
}
