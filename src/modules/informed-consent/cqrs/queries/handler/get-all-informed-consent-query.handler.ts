import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllInformedConsentQuery } from '../impl/get-all-informed-consent.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { InformedConsentEntity } from '../../../entities/informed-consent.entity';
import { InformedConsentEntityService } from '../../../services/informed-consent-entity.service';

@QueryHandler(GetAllInformedConsentQuery)
export class GetAllInformedConsentQueryHandler extends GetAllQueryHandler<InformedConsentEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, InformedConsentEntityService.name)
  }

}
