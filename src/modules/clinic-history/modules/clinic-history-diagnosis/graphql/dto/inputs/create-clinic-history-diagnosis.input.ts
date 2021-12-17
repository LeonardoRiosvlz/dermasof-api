import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateClinicHistoryDiagnosisInput {
  @Field(() => ID, {nullable: true}) clinicHistory: string;
  @Field(() => ID, {nullable: true}) diagnosisType: string;
  @Field(() => ID, {nullable: true}) diagnosis: string;
}
