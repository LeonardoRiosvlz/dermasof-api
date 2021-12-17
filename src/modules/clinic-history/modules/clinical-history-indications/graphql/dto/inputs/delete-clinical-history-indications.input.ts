import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteClinicalHistoryIndicationsInput {
  @Field(() => ID, )  entityId: string;
}
