import { CommandHandler } from '@nestjs/cqrs';

import { CreatePhotographicReportCommand } from '../impl/create-photographic-report.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { PhotographicReportEntity } from '../../../entities/photographic-report.entity';
import { PhotographicReportEntityService } from '../../../services/photographic-report-entity.service';

@CommandHandler(CreatePhotographicReportCommand)
export class CreatePhotographicReportCommandHandler extends CreateCommandHandler<PhotographicReportEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, PhotographicReportEntityService.name);
  }

}
