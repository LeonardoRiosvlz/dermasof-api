import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteDiagnosisInput {
  @Field(() => ID, )  entityId: string;
}
