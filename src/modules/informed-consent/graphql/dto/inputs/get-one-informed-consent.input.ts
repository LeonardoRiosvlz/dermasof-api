import { Field, InputType } from '@nestjs/graphql';
import { InformedConsentFilter, InformedConsentFilterInput } from './informed-consent-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneInformedConsentInput {
  @Field(() => InformedConsentFilterInput, {nullable: true} )  where?: Filter<InformedConsentFilter>;
}
