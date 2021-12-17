import { CommandHandler } from '@nestjs/cqrs';
import { DeletePhotographicReportCommand } from '../impl/delete-photographic-report.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { PhotographicReportEntity } from '../../../entities/photographic-report.entity';
import { PhotographicReportEntityService } from '../../../services/photographic-report-entity.service';

@CommandHandler(DeletePhotographicReportCommand)
export class DeletePhotographicReportCommandHandler extends DeleteCommandHandler<PhotographicReportEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, PhotographicReportEntityService.name)
  }
}
