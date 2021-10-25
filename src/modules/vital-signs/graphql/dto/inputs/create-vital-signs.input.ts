import { Field, InputType, ID, Float } from '@nestjs/graphql';

@InputType()
export class CreateVitalSignsInput {
  @Field(() => Float, )  heartRate: number;
  @Field(() => Float, )  breathingFrequency: number;
  @Field(() => Float, )  weight: number;
  @Field(() => Float, )  bloodPressure: number;
  @Field(() => Float, )  temperature: number;
  @Field(() => Float, )  saturation: number;
  @Field(() => ID, { nullable: true }) patient: string;
  @Field(() => ID, { nullable: true }) consultationType: string;
  @Field(() => String, {nullable: true} )  description?: string;
}
