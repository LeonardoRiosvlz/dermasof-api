import { InformedConsentEntity } from '../entities/informed-consent.entity';

import { Injectable } from '@nestjs/common';
import { InformedConsentResponse } from '../graphql/dto/responses/informed-consent.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateInformedConsentInput } from '../graphql/dto/inputs/create-informed-consent.input';

@Injectable()
export class InformedConsentMapper implements BaseMapper<InformedConsentEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateInformedConsentInput>(dto: CreateInformedConsentInput): InformedConsentEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = InformedConsentResponse>(dto: InformedConsentResponse): InformedConsentEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: InformedConsentEntity): InformedConsentResponse {
    return {
      ...persistentEntity,
    };
  }

}
