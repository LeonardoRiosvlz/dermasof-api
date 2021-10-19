import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteDiagnosisTypeInput {
  @Field(() => ID, )  entityId: string;
}
