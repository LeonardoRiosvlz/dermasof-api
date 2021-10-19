import { CommandHandler } from '@nestjs/cqrs';

import { CreateInformedConsentCommand } from '../impl/create-informed-consent.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { InformedConsentEntity } from '../../../entities/informed-consent.entity';
import { InformedConsentEntityService } from '../../../services/informed-consent-entity.service';

@CommandHandler(CreateInformedConsentCommand)
export class CreateInformedConsentCommandHandler extends CreateCommandHandler<InformedConsentEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, InformedConsentEntityService.name);
  }

}
