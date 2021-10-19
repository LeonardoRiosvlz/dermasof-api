import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedDiagnosisQuery } from '../impl/get-paginated-diagnosis.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { DiagnosisEntity } from '../../../entities/diagnosis.entity';
import { DiagnosisEntityService } from '../../../services/diagnosis-entity.service';

@QueryHandler(GetPaginatedDiagnosisQuery)
export class GetPaginatedDiagnosisQueryHandler extends GetPaginatedQueryHandler<DiagnosisEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DiagnosisEntityService.name)
  }

}
