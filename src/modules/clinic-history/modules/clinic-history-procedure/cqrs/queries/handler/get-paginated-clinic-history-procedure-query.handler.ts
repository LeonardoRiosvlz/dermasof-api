import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedClinicHistoryProcedureQuery } from '../impl/get-paginated-clinic-history-procedure.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { ClinicHistoryProcedureEntity } from '../../../entities/clinic-history-procedure.entity';
import { ClinicHistoryProcedureEntityService } from '../../../services/clinic-history-procedure-entity.service';

@QueryHandler(GetPaginatedClinicHistoryProcedureQuery)
export class GetPaginatedClinicHistoryProcedureQueryHandler extends GetPaginatedQueryHandler<ClinicHistoryProcedureEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClinicHistoryProcedureEntityService.name)
  }

}
