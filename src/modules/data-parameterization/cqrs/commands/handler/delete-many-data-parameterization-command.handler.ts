import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyDataParameterizationCommand } from '../impl/delete-many-data-parameterization.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { DataParameterizationEntity } from '../../../entities/data-parameterization.entity';
import { DataParameterizationEntityService } from '../../../services/data-parameterization-entity.service';

@CommandHandler(DeleteManyDataParameterizationCommand)
export class DeleteManyDataParameterizationCommandHandler extends DeleteManyCommandHandler<DataParameterizationEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, DataParameterizationEntityService.name)
  }

}
