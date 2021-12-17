import { FilesPhotographicReportEntity } from '../entities/files-photographic-report.entity';

import { Injectable } from '@nestjs/common';
import { FilesPhotographicReportResponse } from '../graphql/dto/responses/files-photographic-report.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFilesPhotographicReportInput } from '../graphql/dto/inputs/create-files-photographic-report.input';

@Injectable()
export class FilesPhotographicReportMapper implements BaseMapper<FilesPhotographicReportEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFilesPhotographicReportInput>(dto: CreateFilesPhotographicReportInput): FilesPhotographicReportEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FilesPhotographicReportResponse>(dto: FilesPhotographicReportResponse): FilesPhotographicReportEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: FilesPhotographicReportEntity): FilesPhotographicReportResponse {
    return {
      ...persistentEntity,
      photographicReport: persistentEntity?.photographicReport ? { id: persistentEntity.photographicReport } : undefined,
      file: persistentEntity?.file ? { id: persistentEntity.file } : undefined,
    };
  }

}
