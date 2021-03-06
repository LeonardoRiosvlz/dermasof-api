import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdPatientSafetyCheckInput {
  @Field(() => ID, )  entity__Id: string;
}
