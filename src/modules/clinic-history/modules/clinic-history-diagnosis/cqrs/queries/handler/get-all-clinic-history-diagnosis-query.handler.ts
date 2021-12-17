import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllClinicHistoryDiagnosisQuery } from '../impl/get-all-clinic-history-diagnosis.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { ClinicHistoryDiagnosisEntity } from '../../../entities/clinic-history-diagnosis.entity';
import { ClinicHistoryDiagnosisEntityService } from '../../../services/clinic-history-diagnosis-entity.service';

@QueryHandler(GetAllClinicHistoryDiagnosisQuery)
export class GetAllClinicHistoryDiagnosisQueryHandler extends GetAllQueryHandler<ClinicHistoryDiagnosisEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClinicHistoryDiagnosisEntityService.name)
  }

}
