import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteMedicinesInput {
  @Field(() => ID, )  entityId: string;
}
