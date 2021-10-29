import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdClinicHistoryInput {
  @Field(() => ID, )  entity__Id: string;
}
