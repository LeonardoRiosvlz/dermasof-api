import { Field, InputType } from '@nestjs/graphql';



@InputType()
export class TenantResponsibleInput {

  @Field() email: string;
  @Field() firstname: string;
  @Field({ nullable: true }) lastname?: string;
  @Field({ nullable: true }) phoneNumber?: string;
}

