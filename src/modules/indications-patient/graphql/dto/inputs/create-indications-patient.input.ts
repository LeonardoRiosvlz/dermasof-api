import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateIndicationsPatientInput {
  @Field(() => String, )  description: string;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) isActive?: boolean;
}
