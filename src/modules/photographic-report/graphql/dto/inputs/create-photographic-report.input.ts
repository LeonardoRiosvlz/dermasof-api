import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreatePhotographicReportInput {
  @Field(() => String, )  name: string;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => ID, { nullable: true }) patient: string;
  @Field(() => ID, { nullable: true }) after?: string;
  @Field(() => ID, { nullable: true }) before?: string;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) isActive?: boolean;
}
