import { Field, InputType } from '@nestjs/graphql';
import { SettingFilter, SettingFilterInput } from './setting-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneSettingInput {
  @Field(() => SettingFilterInput, {nullable: true} )  where?: Filter<SettingFilter>;
}
