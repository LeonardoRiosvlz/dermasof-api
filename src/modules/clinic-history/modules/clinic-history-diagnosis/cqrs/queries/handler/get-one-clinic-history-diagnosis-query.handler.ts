import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneClinicHistoryDiagnosisQuery } from '../impl/get-one-clinic-history-diagnosis.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { ClinicHistoryDiagnosisEntity } from '../../../entities/clinic-history-diagnosis.entity';
import { ClinicHistoryDiagnosisEntityService } from '../../../services/clinic-history-diagnosis-entity.service';

@QueryHandler(GetOneClinicHistoryDiagnosisQuery)
export class GetOneClinicHistoryDiagnosisQueryHandler extends GetOneQueryHandler<ClinicHistoryDiagnosisEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClinicHistoryDiagnosisEntityService.name)
  }
}

