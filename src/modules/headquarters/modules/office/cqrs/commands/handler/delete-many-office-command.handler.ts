import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyOfficeCommand } from '../impl/delete-many-office.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { OfficeEntity } from '../../../entities/office.entity';
import { OfficeEntityService } from '../../../services/office-entity.service';

@CommandHandler(DeleteManyOfficeCommand)
export class DeleteManyOfficeCommandHandler extends DeleteManyCommandHandler<OfficeEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, OfficeEntityService.name)
  }

}
