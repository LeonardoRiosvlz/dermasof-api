import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllLaboratoryExamsQuery } from '../impl/get-all-laboratory-exams.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { LaboratoryExamsEntity } from '../../../entities/laboratory-exams.entity';
import { LaboratoryExamsEntityService } from '../../../services/laboratory-exams-entity.service';

@QueryHandler(GetAllLaboratoryExamsQuery)
export class GetAllLaboratoryExamsQueryHandler extends GetAllQueryHandler<LaboratoryExamsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, LaboratoryExamsEntityService.name)
  }

}
