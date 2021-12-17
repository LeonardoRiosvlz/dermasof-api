import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { PhotographicReportEntity } from '../../../entities/photographic-report.entity';

export class CreatePhotographicReportCommand extends CreateCommand<PhotographicReportEntity> {
  constructor(public request: PhotographicReportEntity) {
    super(request);
  }
}
