import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedDiagnosisTypeQuery } from '../impl/get-paginated-diagnosis-type.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { DiagnosisTypeEntity } from '../../../entities/diagnosis-type.entity';
import { DiagnosisTypeEntityService } from '../../../services/diagnosis-type-entity.service';

@QueryHandler(GetPaginatedDiagnosisTypeQuery)
export class GetPaginatedDiagnosisTypeQueryHandler extends GetPaginatedQueryHandler<DiagnosisTypeEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DiagnosisTypeEntityService.name)
  }

}
