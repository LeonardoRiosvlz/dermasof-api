import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyConsultationTypeCommand } from '../impl/delete-many-consultation-type.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { ConsultationTypeEntity } from '../../../entities/consultation-type.entity';
import { ConsultationTypeEntityService } from '../../../services/consultation-type-entity.service';

@CommandHandler(DeleteManyConsultationTypeCommand)
export class DeleteManyConsultationTypeCommandHandler extends DeleteManyCommandHandler<ConsultationTypeEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ConsultationTypeEntityService.name)
  }

}
