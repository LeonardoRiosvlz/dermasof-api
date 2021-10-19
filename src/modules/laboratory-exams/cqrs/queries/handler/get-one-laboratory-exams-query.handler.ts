import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneLaboratoryExamsQuery } from '../impl/get-one-laboratory-exams.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { LaboratoryExamsEntity } from '../../../entities/laboratory-exams.entity';
import { LaboratoryExamsEntityService } from '../../../services/laboratory-exams-entity.service';

@QueryHandler(GetOneLaboratoryExamsQuery)
export class GetOneLaboratoryExamsQueryHandler extends GetOneQueryHandler<LaboratoryExamsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, LaboratoryExamsEntityService.name)
  }
}

