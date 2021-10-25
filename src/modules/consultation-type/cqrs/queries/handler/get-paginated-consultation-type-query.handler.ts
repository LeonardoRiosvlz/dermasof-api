import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedConsultationTypeQuery } from '../impl/get-paginated-consultation-type.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { ConsultationTypeEntity } from '../../../entities/consultation-type.entity';
import { ConsultationTypeEntityService } from '../../../services/consultation-type-entity.service';

@QueryHandler(GetPaginatedConsultationTypeQuery)
export class GetPaginatedConsultationTypeQueryHandler extends GetPaginatedQueryHandler<ConsultationTypeEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, ConsultationTypeEntityService.name)
  }

}
