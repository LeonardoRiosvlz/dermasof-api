import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneConsultationTypeQuery } from '../impl/get-one-consultation-type.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { ConsultationTypeEntity } from '../../../entities/consultation-type.entity';
import { ConsultationTypeEntityService } from '../../../services/consultation-type-entity.service';

@QueryHandler(GetOneConsultationTypeQuery)
export class GetOneConsultationTypeQueryHandler extends GetOneQueryHandler<ConsultationTypeEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ConsultationTypeEntityService.name)
  }
}

