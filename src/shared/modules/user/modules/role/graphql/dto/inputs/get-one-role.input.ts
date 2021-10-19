import { Field, InputType } from '@nestjs/graphql';
import { RoleFilter, RoleFilterInput } from './role-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneRoleInput {
  @Field(() => RoleFilterInput, {nullable: true} )  where?: Filter<RoleFilter>;
}
