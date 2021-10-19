import { InputType, Field } from '@nestjs/graphql';

import { BaseInput } from 'src/shared/dto/base-input.dto';
import { Filter } from '@nestjs-query/core';
import { UserFilterInput } from '../../filters/user.filter';
import { UserFilter } from '../../filters/user.filter';


@InputType()
export class DeleteManyUserInput extends BaseInput {
  @Field(() => UserFilterInput, {nullable: true}) where?: Filter<UserFilter>;

}

