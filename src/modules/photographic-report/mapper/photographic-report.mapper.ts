import { PhotographicReportEntity } from '../entities/photographic-report.entity';

import { Injectable } from '@nestjs/common';
import { PhotographicReportResponse } from '../graphql/dto/responses/photographic-report.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreatePhotographicReportInput } from '../graphql/dto/inputs/create-photographic-report.input';

@Injectable()
export class PhotographicReportMapper implements BaseMapper<PhotographicReportEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreatePhotographicReportInput>(dto: CreatePhotographicReportInput): PhotographicReportEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = PhotographicReportResponse>(dto: PhotographicReportResponse): PhotographicReportEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: PhotographicReportEntity): PhotographicReportResponse {
    return {
      ...persistentEntity,
      patient: persistentEntity?.patient ? { id: persistentEntity.patient } : undefined,
      after: persistentEntity?.after ? { id: persistentEntity.after } : undefined,
      before: persistentEntity?.before ? { id: persistentEntity.before } : undefined,
    };
  }

}
