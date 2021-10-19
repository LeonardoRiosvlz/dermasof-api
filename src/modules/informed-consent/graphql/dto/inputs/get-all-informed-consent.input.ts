import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByInformedConsentInput } from './order-by-informed-consent.input';
import { InformedConsentFilter, InformedConsentFilterInput } from './informed-consent-filter.input';

@InputType()
export class GetAllInformedConsentInput {
  @Field(() => InformedConsentFilterInput, {nullable: true} )  where?: Filter<InformedConsentFilter>;
  @Field(() => OrderByInformedConsentInput, {nullable: true} )  orderBy?: OrderByInformedConsentInput;
}
