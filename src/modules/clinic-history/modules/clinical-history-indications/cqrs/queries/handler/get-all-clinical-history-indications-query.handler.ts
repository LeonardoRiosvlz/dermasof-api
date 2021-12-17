import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllClinicalHistoryIndicationsQuery } from '../impl/get-all-clinical-history-indications.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { ClinicalHistoryIndicationsEntity } from '../../../entities/clinical-history-indications.entity';
import { ClinicalHistoryIndicationsEntityService } from '../../../services/clinical-history-indications-entity.service';

@QueryHandler(GetAllClinicalHistoryIndicationsQuery)
export class GetAllClinicalHistoryIndicationsQueryHandler extends GetAllQueryHandler<ClinicalHistoryIndicationsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClinicalHistoryIndicationsEntityService.name)
  }

}
