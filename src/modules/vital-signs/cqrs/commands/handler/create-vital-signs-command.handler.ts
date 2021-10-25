import { CommandHandler } from '@nestjs/cqrs';

import { CreateVitalSignsCommand } from '../impl/create-vital-signs.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { VitalSignsEntity } from '../../../entities/vital-signs.entity';
import { VitalSignsEntityService } from '../../../services/vital-signs-entity.service';

@CommandHandler(CreateVitalSignsCommand)
export class CreateVitalSignsCommandHandler extends CreateCommandHandler<VitalSignsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, VitalSignsEntityService.name);
  }

}
