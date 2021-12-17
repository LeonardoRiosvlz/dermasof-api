import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteClinicHistoryDiagnosisInput {
  @Field(() => ID, )  entityId: string;
}
