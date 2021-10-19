import { CommandHandler } from '@nestjs/cqrs';
import { UpdateDataParameterizationCommand } from '../impl/update-data-parameterization.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { DataParameterizationEntityService } from '../../../services/data-parameterization-entity.service';
import { DataParameterizationEntity } from '../../../entities/data-parameterization.entity';

@CommandHandler(UpdateDataParameterizationCommand)
export class UpdateDataParameterizationCommandHandler extends UpdateCommandHandler<DataParameterizationEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, DataParameterizationEntityService.name)
  }

}
