import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeletePatientsInput {
  @Field(() => ID, )  entityId: string;
}
