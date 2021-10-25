import { Field, InputType } from '@nestjs/graphql';
import { VitalSignsFilter,VitalSignsFilterInput } from './vital-signs-filter.input';
import { OrderByVitalSignsInput } from './order-by-vital-signs.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedVitalSignsInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => VitalSignsFilterInput, {nullable: true} )  where?: Filter<VitalSignsFilter>;
  @Field(() => OrderByVitalSignsInput, {nullable: true} )  orderBy?: OrderByVitalSignsInput;
}
