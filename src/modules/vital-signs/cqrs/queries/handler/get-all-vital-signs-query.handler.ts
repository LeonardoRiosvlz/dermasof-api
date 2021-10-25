import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllVitalSignsQuery } from '../impl/get-all-vital-signs.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { VitalSignsEntity } from '../../../entities/vital-signs.entity';
import { VitalSignsEntityService } from '../../../services/vital-signs-entity.service';

@QueryHandler(GetAllVitalSignsQuery)
export class GetAllVitalSignsQueryHandler extends GetAllQueryHandler<VitalSignsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, VitalSignsEntityService.name)
  }

}
