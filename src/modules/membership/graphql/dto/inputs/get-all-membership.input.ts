import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByMembershipInput } from './order-by-membership.input';
import { MembershipFilter, MembershipFilterInput } from './membership-filter.input';

@InputType()
export class GetAllMembershipInput {
  @Field(() => MembershipFilterInput, {nullable: true} )  where?: Filter<MembershipFilter>;
  @Field(() => OrderByMembershipInput, {nullable: true} )  orderBy?: OrderByMembershipInput;
}
