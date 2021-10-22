import { Field, InputType } from '@nestjs/graphql';
import { ServiceFilter,ServiceFilterInput } from './service-filter.input';
import { OrderByServiceInput } from './order-by-service.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedServiceInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => ServiceFilterInput, {nullable: true} )  where?: Filter<ServiceFilter>;
  @Field(() => OrderByServiceInput, {nullable: true} )  orderBy?: OrderByServiceInput;
}
