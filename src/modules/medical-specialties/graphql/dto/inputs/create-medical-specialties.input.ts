import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateMedicalSpecialtiesInput {
  @Field(() => String, )  name: string;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) isActive?: boolean;
}
