import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteProductInput {
  @Field(() => ID, )  entityId: string;
}
