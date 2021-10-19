import { CommandHandler } from '@nestjs/cqrs';
import { UpdateHeadquartersCommand } from '../impl/update-headquarters.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { HeadquartersEntityService } from '../../../services/headquarters-entity.service';
import { HeadquartersEntity } from '../../../entities/headquarters.entity';

@CommandHandler(UpdateHeadquartersCommand)
export class UpdateHeadquartersCommandHandler extends UpdateCommandHandler<HeadquartersEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, HeadquartersEntityService.name)
  }

}
