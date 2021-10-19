import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllDiagnosisTypeQuery } from '../impl/get-all-diagnosis-type.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { DiagnosisTypeEntity } from '../../../entities/diagnosis-type.entity';
import { DiagnosisTypeEntityService } from '../../../services/diagnosis-type-entity.service';

@QueryHandler(GetAllDiagnosisTypeQuery)
export class GetAllDiagnosisTypeQueryHandler extends GetAllQueryHandler<DiagnosisTypeEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DiagnosisTypeEntityService.name)
  }

}
