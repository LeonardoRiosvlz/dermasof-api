import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteProceduresInput {
  @Field(() => ID, )  entityId: string;
}
