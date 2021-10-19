import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteLaboratoryExamsInput {
  @Field(() => ID, )  entityId: string;
}
