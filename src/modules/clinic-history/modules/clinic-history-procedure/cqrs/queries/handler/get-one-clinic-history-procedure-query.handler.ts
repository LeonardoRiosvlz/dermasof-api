import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneClinicHistoryProcedureQuery } from '../impl/get-one-clinic-history-procedure.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { ClinicHistoryProcedureEntity } from '../../../entities/clinic-history-procedure.entity';
import { ClinicHistoryProcedureEntityService } from '../../../services/clinic-history-procedure-entity.service';

@QueryHandler(GetOneClinicHistoryProcedureQuery)
export class GetOneClinicHistoryProcedureQueryHandler extends GetOneQueryHandler<ClinicHistoryProcedureEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClinicHistoryProcedureEntityService.name)
  }
}

