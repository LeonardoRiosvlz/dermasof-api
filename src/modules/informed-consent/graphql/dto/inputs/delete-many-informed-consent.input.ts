import { Field, InputType, ID } from '@nestjs/graphql';
import { InformedConsentFilter, InformedConsentFilterInput } from './informed-consent-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyInformedConsentInput {
  @Field(() => InformedConsentFilterInput, {nullable: true} )  where?: Filter<InformedConsentFilter>;
}
