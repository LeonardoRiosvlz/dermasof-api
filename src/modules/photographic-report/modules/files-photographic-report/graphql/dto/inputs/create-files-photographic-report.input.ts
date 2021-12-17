import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateFilesPhotographicReportInput {
  @Field(() => ID, {nullable: true} )  photographicReport?: string;
  @Field(() => String, {nullable: true})  name?: string;
  @Field(() => ID, { nullable: true }) file?: string;
}
