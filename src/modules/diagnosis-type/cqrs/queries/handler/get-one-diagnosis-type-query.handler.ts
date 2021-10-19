import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneDiagnosisTypeQuery } from '../impl/get-one-diagnosis-type.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { DiagnosisTypeEntity } from '../../../entities/diagnosis-type.entity';
import { DiagnosisTypeEntityService } from '../../../services/diagnosis-type-entity.service';

@QueryHandler(GetOneDiagnosisTypeQuery)
export class GetOneDiagnosisTypeQueryHandler extends GetOneQueryHandler<DiagnosisTypeEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, DiagnosisTypeEntityService.name)
  }
}

