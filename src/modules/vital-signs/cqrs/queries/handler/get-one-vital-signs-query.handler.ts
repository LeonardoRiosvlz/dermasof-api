import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneVitalSignsQuery } from '../impl/get-one-vital-signs.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { VitalSignsEntity } from '../../../entities/vital-signs.entity';
import { VitalSignsEntityService } from '../../../services/vital-signs-entity.service';

@QueryHandler(GetOneVitalSignsQuery)
export class GetOneVitalSignsQueryHandler extends GetOneQueryHandler<VitalSignsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, VitalSignsEntityService.name)
  }
}

