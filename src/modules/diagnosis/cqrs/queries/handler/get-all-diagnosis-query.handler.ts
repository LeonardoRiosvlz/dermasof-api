import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllDiagnosisQuery } from '../impl/get-all-diagnosis.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { DiagnosisEntity } from '../../../entities/diagnosis.entity';
import { DiagnosisEntityService } from '../../../services/diagnosis-entity.service';

@QueryHandler(GetAllDiagnosisQuery)
export class GetAllDiagnosisQueryHandler extends GetAllQueryHandler<DiagnosisEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DiagnosisEntityService.name)
  }

}
