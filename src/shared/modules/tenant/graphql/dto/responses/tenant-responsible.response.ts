import { ObjectType, Field } from '@nestjs/graphql';



@ObjectType()
export class TenantResponsibleResponse {

  @Field() email: string;
  @Field() firstname: string;
  @Field({ nullable: true }) lastname?: string;
  @Field({ nullable: true }) phoneNumber?: string;
}

