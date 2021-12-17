import { CommandHandler } from '@nestjs/cqrs';
import { UpdatePhotographicReportCommand } from '../impl/update-photographic-report.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { PhotographicReportEntityService } from '../../../services/photographic-report-entity.service';
import { PhotographicReportEntity } from '../../../entities/photographic-report.entity';

@CommandHandler(UpdatePhotographicReportCommand)
export class UpdatePhotographicReportCommandHandler extends UpdateCommandHandler<PhotographicReportEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, PhotographicReportEntityService.name)
  }

}
