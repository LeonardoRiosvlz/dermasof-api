import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteDataParameterizationInput {
  @Field(() => ID, )  entityId: string;
}
