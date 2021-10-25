import { CommandHandler } from '@nestjs/cqrs';
import { UpdateVitalSignsCommand } from '../impl/update-vital-signs.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { VitalSignsEntityService } from '../../../services/vital-signs-entity.service';
import { VitalSignsEntity } from '../../../entities/vital-signs.entity';

@CommandHandler(UpdateVitalSignsCommand)
export class UpdateVitalSignsCommandHandler extends UpdateCommandHandler<VitalSignsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, VitalSignsEntityService.name)
  }

}
