import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { ClinicalHistoryIndicationsEntity } from '../../../entities/clinical-history-indications.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyClinicalHistoryIndicationsCommand extends DeleteManyCommand<ClinicalHistoryIndicationsEntity>{
  constructor(public request: GetOneDto<ClinicalHistoryIndicationsEntity>) {
    super(request)
  }
}
