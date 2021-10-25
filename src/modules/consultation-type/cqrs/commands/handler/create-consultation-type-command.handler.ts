import { CommandHandler } from '@nestjs/cqrs';

import { CreateConsultationTypeCommand } from '../impl/create-consultation-type.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { ConsultationTypeEntity } from '../../../entities/consultation-type.entity';
import { ConsultationTypeEntityService } from '../../../services/consultation-type-entity.service';

@CommandHandler(CreateConsultationTypeCommand)
export class CreateConsultationTypeCommandHandler extends CreateCommandHandler<ConsultationTypeEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ConsultationTypeEntityService.name);
  }

}
