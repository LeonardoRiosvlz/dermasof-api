import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedVitalSignsQuery } from '../impl/get-paginated-vital-signs.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { VitalSignsEntity } from '../../../entities/vital-signs.entity';
import { VitalSignsEntityService } from '../../../services/vital-signs-entity.service';

@QueryHandler(GetPaginatedVitalSignsQuery)
export class GetPaginatedVitalSignsQueryHandler extends GetPaginatedQueryHandler<VitalSignsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, VitalSignsEntityService.name)
  }

}
