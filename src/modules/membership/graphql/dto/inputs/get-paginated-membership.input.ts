import { Field, InputType } from '@nestjs/graphql';
import { MembershipFilter,MembershipFilterInput } from './membership-filter.input';
import { OrderByMembershipInput } from './order-by-membership.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedMembershipInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => MembershipFilterInput, {nullable: true} )  where?: Filter<MembershipFilter>;
  @Field(() => OrderByMembershipInput, {nullable: true} )  orderBy?: OrderByMembershipInput;
}
