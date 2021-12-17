import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedClinicalHistoryIndicationsQuery } from '../impl/get-paginated-clinical-history-indications.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { ClinicalHistoryIndicationsEntity } from '../../../entities/clinical-history-indications.entity';
import { ClinicalHistoryIndicationsEntityService } from '../../../services/clinical-history-indications-entity.service';

@QueryHandler(GetPaginatedClinicalHistoryIndicationsQuery)
export class GetPaginatedClinicalHistoryIndicationsQueryHandler extends GetPaginatedQueryHandler<ClinicalHistoryIndicationsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClinicalHistoryIndicationsEntityService.name)
  }

}
