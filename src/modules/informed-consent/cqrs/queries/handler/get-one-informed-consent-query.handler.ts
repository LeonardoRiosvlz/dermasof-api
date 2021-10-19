import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneInformedConsentQuery } from '../impl/get-one-informed-consent.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { InformedConsentEntity } from '../../../entities/informed-consent.entity';
import { InformedConsentEntityService } from '../../../services/informed-consent-entity.service';

@QueryHandler(GetOneInformedConsentQuery)
export class GetOneInformedConsentQueryHandler extends GetOneQueryHandler<InformedConsentEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, InformedConsentEntityService.name)
  }
}

