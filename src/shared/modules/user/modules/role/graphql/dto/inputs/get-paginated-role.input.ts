import { Field, InputType } from '@nestjs/graphql';
import { RoleFilter,RoleFilterInput } from './role-filter.input';
import { OrderByRoleInput } from './order-by-role.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedRoleInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => RoleFilterInput, {nullable: true} )  where?: Filter<RoleFilter>;
  @Field(() => OrderByRoleInput, {nullable: true} )  orderBy?: OrderByRoleInput;
}
