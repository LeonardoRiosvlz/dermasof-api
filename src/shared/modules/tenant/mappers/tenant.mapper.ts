import { TenantResponse } from '../graphql/dto/responses/tenant.response';
import { UniqueEntityID } from '../../data-access/mongoose/UniqueEntityID';
import { Injectable } from '@nestjs/common';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { TenantEntity } from '../entities/tenant.entity';
import { CreateTenantInput } from '../graphql/dto/input/create-tenant.input';

@Injectable()
export class TenantMapper extends BaseMapper<TenantEntity> {


  // @ts-ignore
  dtoInput2Persistent<DTO = CreateTenantInput>(dto: CreateTenantInput): TenantEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = TenantResponse>(dto: TenantResponse): TenantEntity {
    throw new Error('No Implementation');
  }


  persistent2Dto({ info, ...rest }: TenantEntity): TenantResponse {
    return {
      ...rest,
      info: {
        ...info,
        logoFile: info?.logoFile ? { id: info?.logoFile } : undefined,
      },

    };
  }

}




