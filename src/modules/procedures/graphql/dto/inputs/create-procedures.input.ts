import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateProceduresInput {
  @Field(() => String, )  code: string;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) isActive?: boolean;
}
