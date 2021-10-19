import { CommandHandler } from '@nestjs/cqrs';

import { CreateDataParameterizationCommand } from '../impl/create-data-parameterization.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { DataParameterizationEntity } from '../../../entities/data-parameterization.entity';
import { DataParameterizationEntityService } from '../../../services/data-parameterization-entity.service';

@CommandHandler(CreateDataParameterizationCommand)
export class CreateDataParameterizationCommandHandler extends CreateCommandHandler<DataParameterizationEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, DataParameterizationEntityService.name);
  }

}
