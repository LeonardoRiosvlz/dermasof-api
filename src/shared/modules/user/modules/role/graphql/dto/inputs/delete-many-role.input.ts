import { Field, InputType, ID } from '@nestjs/graphql';
import { RoleFilter, RoleFilterInput } from './role-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyRoleInput {
  @Field(() => RoleFilterInput, {nullable: true} )  where?: Filter<RoleFilter>;
}
