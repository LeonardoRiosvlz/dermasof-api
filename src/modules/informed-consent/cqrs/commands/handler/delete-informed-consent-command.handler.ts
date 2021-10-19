import { CommandHandler } from '@nestjs/cqrs';
import { DeleteInformedConsentCommand } from '../impl/delete-informed-consent.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { InformedConsentEntity } from '../../../entities/informed-consent.entity';
import { InformedConsentEntityService } from '../../../services/informed-consent-entity.service';

@CommandHandler(DeleteInformedConsentCommand)
export class DeleteInformedConsentCommandHandler extends DeleteCommandHandler<InformedConsentEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, InformedConsentEntityService.name)
  }
}
