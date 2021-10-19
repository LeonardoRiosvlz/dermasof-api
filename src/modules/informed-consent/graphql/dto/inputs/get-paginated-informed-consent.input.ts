import { Field, InputType } from '@nestjs/graphql';
import { InformedConsentFilter,InformedConsentFilterInput } from './informed-consent-filter.input';
import { OrderByInformedConsentInput } from './order-by-informed-consent.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedInformedConsentInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => InformedConsentFilterInput, {nullable: true} )  where?: Filter<InformedConsentFilter>;
  @Field(() => OrderByInformedConsentInput, {nullable: true} )  orderBy?: OrderByInformedConsentInput;
}
