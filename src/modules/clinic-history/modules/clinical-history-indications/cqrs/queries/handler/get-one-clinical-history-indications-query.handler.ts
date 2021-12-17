import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneClinicalHistoryIndicationsQuery } from '../impl/get-one-clinical-history-indications.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { ClinicalHistoryIndicationsEntity } from '../../../entities/clinical-history-indications.entity';
import { ClinicalHistoryIndicationsEntityService } from '../../../services/clinical-history-indications-entity.service';

@QueryHandler(GetOneClinicalHistoryIndicationsQuery)
export class GetOneClinicalHistoryIndicationsQueryHandler extends GetOneQueryHandler<ClinicalHistoryIndicationsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ClinicalHistoryIndicationsEntityService.name)
  }
}

