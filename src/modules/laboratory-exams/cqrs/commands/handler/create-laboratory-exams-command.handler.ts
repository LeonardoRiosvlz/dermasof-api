import { CommandHandler } from '@nestjs/cqrs';

import { CreateLaboratoryExamsCommand } from '../impl/create-laboratory-exams.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { LaboratoryExamsEntity } from '../../../entities/laboratory-exams.entity';
import { LaboratoryExamsEntityService } from '../../../services/laboratory-exams-entity.service';

@CommandHandler(CreateLaboratoryExamsCommand)
export class CreateLaboratoryExamsCommandHandler extends CreateCommandHandler<LaboratoryExamsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, LaboratoryExamsEntityService.name);
  }

}
