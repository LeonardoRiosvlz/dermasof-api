import { InputType, Field, registerEnumType, PartialType, ID } from '@nestjs/graphql';

import { Gender } from '../../../entities/schemas/profile.schema';

registerEnumType(Gender, { name: 'UserGender' });

@InputType()
export class ProfileInput {
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
  @Field(()=> ID, { nullable: true }) area?: string;
  @Field(()=> ID, { nullable: true} ) position?:string;

}


@InputType()
export class PartialProfileInput extends PartialType(ProfileInput){

}



