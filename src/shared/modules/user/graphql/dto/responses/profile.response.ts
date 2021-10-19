import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

import { Gender } from '../../../entities/schemas/profile.schema';
import { SolvedEntityResponse } from '../../../../graphql/dto/responses/solved-entity.response';
registerEnumType(Gender, {name: 'Gender'})

@ObjectType()
export class ProfileResponse {
  @Field({ nullable: true }) country?: string;
  @Field(() => Gender, { nullable: true }) gender?: Gender;
  @Field({ nullable: true }) zipCode?: string;
  @Field({ nullable: true }) city?: string;
  @Field({ nullable: true }) address?: string;
  @Field({ nullable: true }) state?: string;
  @Field({ nullable: true }) birthDay?: string;
  @Field({ nullable: true }) personalWeb?: string;
  @Field({ nullable: true }) btcWallet?: string;
  @Field({ nullable: true }) tronWallet?: string;
  @Field({ nullable: true }) phoneNumber?: string;
  @Field({ nullable: true }) aboutMe?: string;
  @Field({ nullable: true }) isLeader?: boolean;
  @Field(()=> SolvedEntityResponse, { nullable: true }) area?: SolvedEntityResponse;
  @Field(()=> SolvedEntityResponse, { nullable: true }) position?: SolvedEntityResponse;
}





