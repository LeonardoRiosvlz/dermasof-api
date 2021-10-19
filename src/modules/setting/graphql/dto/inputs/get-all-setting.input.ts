import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderBySettingInput } from './order-by-setting.input';
import { SettingFilter, SettingFilterInput } from './setting-filter.input';

@InputType()
export class GetAllSettingInput {
  @Field(() => SettingFilterInput, {nullable: true} )  where?: Filter<SettingFilter>;
  @Field(() => OrderBySettingInput, {nullable: true} )  orderBy?: OrderBySettingInput;
}
