import { Field, InputType, ID, Int } from '@nestjs/graphql';

@InputType()
export class CreateConsultationTypeInput {
  @Field(() => String, )  name: string;
  @Field(() => Int, )  duration: number;
  @Field(() => ID, { nullable: true }) service: string;
  @Field(() => String, {nullable: true} )  description?: string;
}
