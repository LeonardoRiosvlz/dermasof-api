import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedClinicHistoryDiagnosisQuery } from '../impl/get-paginated-clinic-history-diagnosis.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { ClinicHistoryDiagnosisEntity } from '../../../entities/clinic-history-diagnosis.entity';
import { ClinicHistoryDiagnosisEntityService } from '../../../services/clinic-history-diagnosis-entity.service';

@QueryHandler(GetPaginatedClinicHistoryDiagnosisQuery)
export class GetPaginatedClinicHistoryDiagnosisQueryHandler extends GetPaginatedQueryHandler<ClinicHistoryDiagnosisEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClinicHistoryDiagnosisEntityService.name)
  }

}
