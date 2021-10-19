import { CommandHandler } from '@nestjs/cqrs';
import { DeleteHeadquartersCommand } from '../impl/delete-headquarters.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { HeadquartersEntity } from '../../../entities/headquarters.entity';
import { HeadquartersEntityService } from '../../../services/headquarters-entity.service';

@CommandHandler(DeleteHeadquartersCommand)
export class DeleteHeadquartersCommandHandler extends DeleteCommandHandler<HeadquartersEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, HeadquartersEntityService.name)
  }
}
