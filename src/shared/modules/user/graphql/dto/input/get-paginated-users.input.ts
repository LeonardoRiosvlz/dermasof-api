import { InputType, Field } from '@nestjs/graphql';
import { BaseInput } from 'src/shared/dto/base-input.dto';
import { Filter } from '@nestjs-query/core';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { UserFilter, UserFilterInput } from '../../filters/user.filter';
import { OrderByUserInput } from './order-by-user.input';

@InputType()
export class GetPaginatedUsersInput extends BaseInput {
  @Field(() => PaginatorParams) paginator: PaginatorParams;
  @Field(() => UserFilterInput, {nullable: true}) where?: Filter<UserFilter>;
  @Field(() => OrderByUserInput, {nullable: true}) orderBy?: OrderByUserInput;


}
