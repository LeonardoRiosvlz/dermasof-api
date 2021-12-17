import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateClinicalHistoryIndicationsInput {
  @Field(() => ID, {nullable: true}) clinicHistory: string;
  @Field(() => ID, {nullable: true}) indications: string;
  @Field(() => String, {nullable: true} )  description?: string;
}
