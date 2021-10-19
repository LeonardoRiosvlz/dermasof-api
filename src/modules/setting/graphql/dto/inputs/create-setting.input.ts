import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateSettingInput {
  @Field(() => String, {nullable: true} )  email?: string;
  @Field(() => String, {nullable: true} )  address?: string;
  @Field(() => String, {nullable: true} )  phoneNumber?: string;
  @Field() isActive?: boolean;
  @Field(() => ID, { nullable: true }) logo?: string;
}
