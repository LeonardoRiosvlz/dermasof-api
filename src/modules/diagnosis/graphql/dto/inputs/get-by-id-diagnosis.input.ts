import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdDiagnosisInput {
  @Field(() => ID, )  entity__Id: string;
}
