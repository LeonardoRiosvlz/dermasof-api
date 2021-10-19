import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyDiagnosisTypeCommand } from '../impl/delete-many-diagnosis-type.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { DiagnosisTypeEntity } from '../../../entities/diagnosis-type.entity';
import { DiagnosisTypeEntityService } from '../../../services/diagnosis-type-entity.service';

@CommandHandler(DeleteManyDiagnosisTypeCommand)
export class DeleteManyDiagnosisTypeCommandHandler extends DeleteManyCommandHandler<DiagnosisTypeEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, DiagnosisTypeEntityService.name)
  }

}
