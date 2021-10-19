import { Field, InputType, ID } from '@nestjs/graphql';
import { MedicinesFilter, MedicinesFilterInput } from './medicines-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyMedicinesInput {
  @Field(() => MedicinesFilterInput, {nullable: true} )  where?: Filter<MedicinesFilter>;
}
