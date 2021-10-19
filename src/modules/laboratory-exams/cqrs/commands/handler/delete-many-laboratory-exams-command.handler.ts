import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyLaboratoryExamsCommand } from '../impl/delete-many-laboratory-exams.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { LaboratoryExamsEntity } from '../../../entities/laboratory-exams.entity';
import { LaboratoryExamsEntityService } from '../../../services/laboratory-exams-entity.service';

@CommandHandler(DeleteManyLaboratoryExamsCommand)
export class DeleteManyLaboratoryExamsCommandHandler extends DeleteManyCommandHandler<LaboratoryExamsEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, LaboratoryExamsEntityService.name)
  }

}
