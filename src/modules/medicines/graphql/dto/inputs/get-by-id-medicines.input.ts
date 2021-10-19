import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdMedicinesInput {
  @Field(() => ID, )  entity__Id: string;
}
