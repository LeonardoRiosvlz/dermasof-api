import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneDiagnosisQuery } from '../impl/get-one-diagnosis.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { DiagnosisEntity } from '../../../entities/diagnosis.entity';
import { DiagnosisEntityService } from '../../../services/diagnosis-entity.service';

@QueryHandler(GetOneDiagnosisQuery)
export class GetOneDiagnosisQueryHandler extends GetOneQueryHandler<DiagnosisEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DiagnosisEntityService.name)
  }
}

