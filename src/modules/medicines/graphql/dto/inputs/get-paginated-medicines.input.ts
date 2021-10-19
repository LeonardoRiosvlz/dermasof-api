import { Field, InputType } from '@nestjs/graphql';
import { MedicinesFilter,MedicinesFilterInput } from './medicines-filter.input';
import { OrderByMedicinesInput } from './order-by-medicines.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedMedicinesInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => MedicinesFilterInput, {nullable: true} )  where?: Filter<MedicinesFilter>;
  @Field(() => OrderByMedicinesInput, {nullable: true} )  orderBy?: OrderByMedicinesInput;
}
