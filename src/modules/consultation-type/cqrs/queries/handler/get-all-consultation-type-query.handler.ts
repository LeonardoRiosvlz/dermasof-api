import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllConsultationTypeQuery } from '../impl/get-all-consultation-type.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { ConsultationTypeEntity } from '../../../entities/consultation-type.entity';
import { ConsultationTypeEntityService } from '../../../services/consultation-type-entity.service';

@QueryHandler(GetAllConsultationTypeQuery)
export class GetAllConsultationTypeQueryHandler extends GetAllQueryHandler<ConsultationTypeEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ConsultationTypeEntityService.name)
  }

}
