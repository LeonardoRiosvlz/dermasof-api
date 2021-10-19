import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdDiagnosisTypeInput {
  @Field(() => ID, )  entity__Id: string;
}
