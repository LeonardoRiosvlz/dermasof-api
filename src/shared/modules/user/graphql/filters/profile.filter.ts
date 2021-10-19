import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { FilterableFieldsType } from '../../../data-access/mongoose/types/filterable-fields.type';
import { ID, ObjectType } from '@nestjs/graphql';
import { Gender, ProfileEntity } from '../../entities/schemas/profile.schema';

@ObjectType()
export class ProfileFilter implements FilterableFieldsType<ProfileEntity>{

  @FilterableField({ nullable: true }) country?: string;
  @FilterableField(() => Gender, { nullable: true }) gender?: Gender;
  @FilterableField({ nullable: true }) zipCode?: string;
  @FilterableField({ nullable: true }) city?: string;
  @FilterableField({ nullable: true }) address?: string;
  @FilterableField({ nullable: true }) state?: string;
  @FilterableField({ nullable: true }) birthDay?: string;
  @FilterableField({ nullable: true }) personalWeb?: string;
  @FilterableField({ nullable: true }) btcWallet?: string;
  @FilterableField({ nullable: true }) tronWallet?: string;
  @FilterableField({ nullable: true }) phoneNumber?: string;
  @FilterableField({ nullable: true }) aboutMe?: string;
  @FilterableField({ nullable: true }) isLeader?: boolean;
  @FilterableField(()=> ID, { nullable: true }) area?: string;
  @FilterableField(()=> ID, { nullable: true} ) position?:string;
}


export const ProfileFilterInput = FilterType(ProfileFilter);
