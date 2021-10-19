import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { IEntityFilter } from '../../../data-access/mongoose/types/filterable-fields.type';
import { UserEntity } from '../../entities/user.entity';
import { ObjectType } from '@nestjs/graphql';
import { ProfileFilter, ProfileFilterInput } from './profile.filter';
import { Filter } from '@nestjs-query/core';

@ObjectType()
export class UserFilter implements IEntityFilter<UserEntity> {
  @FilterableField(() => String, { nullable: true }) id?: string;
  @FilterableField(() => String, { nullable: true }) email?: string;
  @FilterableField(() => String, { nullable: true }) username?: string;
  @FilterableField(() => String, { nullable: true }) verified?: boolean;
  @FilterableField(() => String, { nullable: true }) firstname?: string;
  @FilterableField(() => Date, { nullable: true }) lastLogin?: Date;
  @FilterableField(() => String, { nullable: true }) lastname?: string;
  @FilterableField(() => ProfileFilterInput, { nullable: true }) profile?: Filter<ProfileFilter>;

  @FilterableField(() => Date, { nullable: true }) createdAt?: Date;
  @FilterableField(() => Date, { nullable: true }) updatedAt?: Date;
}


export const UserFilterInput = FilterType(UserFilter);
