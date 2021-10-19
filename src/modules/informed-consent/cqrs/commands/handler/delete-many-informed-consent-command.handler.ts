import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyInformedConsentCommand } from '../impl/delete-many-informed-consent.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { InformedConsentEntity } from '../../../entities/informed-consent.entity';
import { InformedConsentEntityService } from '../../../services/informed-consent-entity.service';

@CommandHandler(DeleteManyInformedConsentCommand)
export class DeleteManyInformedConsentCommandHandler extends DeleteManyCommandHandler<InformedConsentEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, InformedConsentEntityService.name)
  }

}
