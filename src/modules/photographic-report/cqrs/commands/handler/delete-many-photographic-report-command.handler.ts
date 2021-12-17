import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyPhotographicReportCommand } from '../impl/delete-many-photographic-report.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { PhotographicReportEntity } from '../../../entities/photographic-report.entity';
import { PhotographicReportEntityService } from '../../../services/photographic-report-entity.service';

@CommandHandler(DeleteManyPhotographicReportCommand)
export class DeleteManyPhotographicReportCommandHandler extends DeleteManyCommandHandler<PhotographicReportEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, PhotographicReportEntityService.name)
  }

}
