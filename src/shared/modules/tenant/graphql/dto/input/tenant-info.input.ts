import { InputType, Field, ID } from '@nestjs/graphql';
import { TenantCurrency } from '../../../entities/schemas/tenant-info.schema';
import { IsEmail, IsUrl } from 'class-validator';
import { TenantResponsibleInput } from './tenant-responsible.input';


@InputType()
export class TenantInfoInput {

  @Field({ nullable: true }) @IsEmail() email?: string;
  @Field({ nullable: true }) country?: string;
  @Field({ nullable: true }) nit?: string;
  @Field({ nullable: true }) @IsUrl() webSite?: string;
  @Field({ nullable: true }) description?: string;
  @Field({ nullable: true }) address?: string;
  @Field({ nullable: true }) phoneNumber?: string;
  @Field(() => TenantCurrency, { nullable: true }) currency?: TenantCurrency;
  @Field(() => TenantResponsibleInput, { nullable: true }) responsible?: TenantResponsibleInput;
  @Field(() => ID, { nullable: true }) logoFile?: string;

}

