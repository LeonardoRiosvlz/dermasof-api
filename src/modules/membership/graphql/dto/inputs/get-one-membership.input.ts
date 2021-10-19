import { Field, InputType } from '@nestjs/graphql';
import { MembershipFilter, MembershipFilterInput } from './membership-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneMembershipInput {
  @Field(() => MembershipFilterInput, {nullable: true} )  where?: Filter<MembershipFilter>;
}
