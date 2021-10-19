import { Field, InputType } from '@nestjs/graphql';
import { SettingFilter,SettingFilterInput } from './setting-filter.input';
import { OrderBySettingInput } from './order-by-setting.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedSettingInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => SettingFilterInput, {nullable: true} )  where?: Filter<SettingFilter>;
  @Field(() => OrderBySettingInput, {nullable: true} )  orderBy?: OrderBySettingInput;
}
