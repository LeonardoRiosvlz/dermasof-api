import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedInformedConsentQuery } from '../impl/get-paginated-informed-consent.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { InformedConsentEntity } from '../../../entities/informed-consent.entity';
import { InformedConsentEntityService } from '../../../services/informed-consent-entity.service';

@QueryHandler(GetPaginatedInformedConsentQuery)
export class GetPaginatedInformedConsentQueryHandler extends GetPaginatedQueryHandler<InformedConsentEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, InformedConsentEntityService.name)
  }

}
