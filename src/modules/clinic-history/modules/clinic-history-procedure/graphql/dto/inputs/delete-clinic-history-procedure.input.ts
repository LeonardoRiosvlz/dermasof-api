import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteClinicHistoryProcedureInput {
  @Field(() => ID, )  entityId: string;
}
