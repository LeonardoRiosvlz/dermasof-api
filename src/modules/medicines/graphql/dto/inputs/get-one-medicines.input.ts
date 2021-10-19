import { Field, InputType } from '@nestjs/graphql';
import { MedicinesFilter, MedicinesFilterInput } from './medicines-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneMedicinesInput {
  @Field(() => MedicinesFilterInput, {nullable: true} )  where?: Filter<MedicinesFilter>;
}
