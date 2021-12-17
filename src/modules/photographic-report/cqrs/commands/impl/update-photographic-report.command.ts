import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { PhotographicReportEntity } from '../../../entities/photographic-report.entity';

export class UpdatePhotographicReportCommand extends UpdateCommand<PhotographicReportEntity> {
  constructor(public entityId: string, update: Partial<PhotographicReportEntity>) {
    super({entityId, update});
  }
}
