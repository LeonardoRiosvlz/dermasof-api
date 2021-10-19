import { CommandHandler } from '@nestjs/cqrs';

import { CreateHeadquartersCommand } from '../impl/create-headquarters.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { HeadquartersEntity } from '../../../entities/headquarters.entity';
import { HeadquartersEntityService } from '../../../services/headquarters-entity.service';

@CommandHandler(CreateHeadquartersCommand)
export class CreateHeadquartersCommandHandler extends CreateCommandHandler<HeadquartersEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, HeadquartersEntityService.name);
  }

}
