import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { ClinicHistoryEntity } from '../../../entities/clinic-history.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyClinicHistoryCommand extends DeleteManyCommand<ClinicHistoryEntity>{
  constructor(public request: GetOneDto<ClinicHistoryEntity>) {
    super(request)
  }
}
