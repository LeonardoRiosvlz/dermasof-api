import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllClinicHistoryProcedureQuery } from '../impl/get-all-clinic-history-procedure.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { ClinicHistoryProcedureEntity } from '../../../entities/clinic-history-procedure.entity';
import { ClinicHistoryProcedureEntityService } from '../../../services/clinic-history-procedure-entity.service';

@QueryHandler(GetAllClinicHistoryProcedureQuery)
export class GetAllClinicHistoryProcedureQueryHandler extends GetAllQueryHandler<ClinicHistoryProcedureEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClinicHistoryProcedureEntityService.name)
  }

}
