import { ObjectType, Field, registerEnumType, ID } from '@nestjs/graphql';
import { TenantCurrency } from '../../../entities/schemas/tenant-info.schema';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { TenantResponsibleResponse } from './tenant-responsible.response';

registerEnumType(TenantCurrency, { name: 'TenantCurrency' });


@ObjectType()
export class TenantInfoResponse {

  @Field({ nullable: true }) email?: string;
  @Field({ nullable: true }) country?: string;
  @Field({ nullable: true }) nit?: string;
  @Field({ nullable: true }) webSite?: string;
  @Field({ nullable: true }) description?: string;
  @Field({ nullable: true }) address?: string;
  @Field({ nullable: true }) phoneNumber?: string;
  @Field(() => TenantCurrency, { nullable: true }) currency?: TenantCurrency;
  @Field(() => TenantResponsibleResponse, { nullable: true }) responsible?: TenantResponsibleResponse;
  @Field(() => CloudFileResponse, { nullable: true }) logoFile?: CloudFileResponse;

}

