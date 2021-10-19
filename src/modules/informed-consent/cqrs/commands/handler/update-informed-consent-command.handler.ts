import { CommandHandler } from '@nestjs/cqrs';
import { UpdateInformedConsentCommand } from '../impl/update-informed-consent.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { InformedConsentEntityService } from '../../../services/informed-consent-entity.service';
import { InformedConsentEntity } from '../../../entities/informed-consent.entity';

@CommandHandler(UpdateInformedConsentCommand)
export class UpdateInformedConsentCommandHandler extends UpdateCommandHandler<InformedConsentEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, InformedConsentEntityService.name)
  }

}
