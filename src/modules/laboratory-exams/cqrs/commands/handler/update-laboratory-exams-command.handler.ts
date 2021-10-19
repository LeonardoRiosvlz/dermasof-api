import { CommandHandler } from '@nestjs/cqrs';
import { UpdateLaboratoryExamsCommand } from '../impl/update-laboratory-exams.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { LaboratoryExamsEntityService } from '../../../services/laboratory-exams-entity.service';
import { LaboratoryExamsEntity } from '../../../entities/laboratory-exams.entity';

@CommandHandler(UpdateLaboratoryExamsCommand)
export class UpdateLaboratoryExamsCommandHandler extends UpdateCommandHandler<LaboratoryExamsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, LaboratoryExamsEntityService.name)
  }

}
