import { CommandHandler } from '@nestjs/cqrs';
import { UpdatePathologiesCommand } from '../impl/update-pathologies.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { PathologiesEntityService } from '../../../services/pathologies-entity.service';
import { PathologiesEntity } from '../../../entities/pathologies.entity';

@CommandHandler(UpdatePathologiesCommand)
export class UpdatePathologiesCommandHandler extends UpdateCommandHandler<PathologiesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, PathologiesEntityService.name)
  }

}
