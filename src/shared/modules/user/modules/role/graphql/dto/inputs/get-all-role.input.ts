import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByRoleInput } from './order-by-role.input';
import { RoleFilter, RoleFilterInput } from './role-filter.input';

@InputType()
export class GetAllRoleInput {
  @Field(() => RoleFilterInput, {nullable: true} )  where?: Filter<RoleFilter>;
  @Field(() => OrderByRoleInput, {nullable: true} )  orderBy?: OrderByRoleInput;
}
