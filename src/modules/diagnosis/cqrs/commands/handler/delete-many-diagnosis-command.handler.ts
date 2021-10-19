import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyDiagnosisCommand } from '../impl/delete-many-diagnosis.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { DiagnosisEntity } from '../../../entities/diagnosis.entity';
import { DiagnosisEntityService } from '../../../services/diagnosis-entity.service';

@CommandHandler(DeleteManyDiagnosisCommand)
export class DeleteManyDiagnosisCommandHandler extends DeleteManyCommandHandler<DiagnosisEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, DiagnosisEntityService.name)
  }

}
