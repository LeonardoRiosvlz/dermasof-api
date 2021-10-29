import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedClinicHistoryQuery } from '../impl/get-paginated-clinic-history.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { ClinicHistoryEntity } from '../../../entities/clinic-history.entity';
import { ClinicHistoryEntityService } from '../../../services/clinic-history-entity.service';

@QueryHandler(GetPaginatedClinicHistoryQuery)
export class GetPaginatedClinicHistoryQueryHandler extends GetPaginatedQueryHandler<ClinicHistoryEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClinicHistoryEntityService.name)
  }

}
