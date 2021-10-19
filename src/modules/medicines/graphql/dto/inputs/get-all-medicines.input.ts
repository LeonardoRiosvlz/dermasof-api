import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByMedicinesInput } from './order-by-medicines.input';
import { MedicinesFilter, MedicinesFilterInput } from './medicines-filter.input';

@InputType()
export class GetAllMedicinesInput {
  @Field(() => MedicinesFilterInput, {nullable: true} )  where?: Filter<MedicinesFilter>;
  @Field(() => OrderByMedicinesInput, {nullable: true} )  orderBy?: OrderByMedicinesInput;
}
