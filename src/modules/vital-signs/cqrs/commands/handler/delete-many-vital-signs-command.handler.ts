import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyVitalSignsCommand } from '../impl/delete-many-vital-signs.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { VitalSignsEntity } from '../../../entities/vital-signs.entity';
import { VitalSignsEntityService } from '../../../services/vital-signs-entity.service';

@CommandHandler(DeleteManyVitalSignsCommand)
export class DeleteManyVitalSignsCommandHandler extends DeleteManyCommandHandler<VitalSignsEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, VitalSignsEntityService.name)
  }

}
