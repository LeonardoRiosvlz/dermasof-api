import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { PhotographicReportEntity } from '../../../entities/photographic-report.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyPhotographicReportCommand extends DeleteManyCommand<PhotographicReportEntity>{
  constructor(public request: GetOneDto<PhotographicReportEntity>) {
    super(request)
  }
}
