import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserAreaInput {
  @Field(() => String, )  name: string;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => Boolean, {defaultValue: true} )  isActive: boolean;
}
