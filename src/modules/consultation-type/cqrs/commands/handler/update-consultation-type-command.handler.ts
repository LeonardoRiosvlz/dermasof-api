import { CommandHandler } from '@nestjs/cqrs';
import { UpdateConsultationTypeCommand } from '../impl/update-consultation-type.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { ConsultationTypeEntityService } from '../../../services/consultation-type-entity.service';
import { ConsultationTypeEntity } from '../../../entities/consultation-type.entity';

@CommandHandler(UpdateConsultationTypeCommand)
export class UpdateConsultationTypeCommandHandler extends UpdateCommandHandler<ConsultationTypeEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ConsultationTypeEntityService.name)
  }

}
