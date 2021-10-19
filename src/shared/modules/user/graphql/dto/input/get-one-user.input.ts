import { InputType, Field } from '@nestjs/graphql';

import { BaseInput } from 'src/shared/dto/base-input.dto';
import { Filter } from '@nestjs-query/core';
import { UserFilterInput } from '../../filters/user.filter';
import { UserFilter } from '../../filters/user.filter';
import { OrderByUserInput } from './order-by-user.input';


@InputType()
export class GetOneUserInput extends BaseInput {
  @Field(() => UserFilterInput, {nullable: true}) where?: Filter<UserFilter>;
  @Field(() => OrderByUserInput, {nullable: true}) orderBy?: OrderByUserInput;

}

