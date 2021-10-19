import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { DiagnosisEntity } from '../../../entities/diagnosis.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyDiagnosisCommand extends DeleteManyCommand<DiagnosisEntity>{
  constructor(public request: GetOneDto<DiagnosisEntity>) {
    super(request)
  }
}
