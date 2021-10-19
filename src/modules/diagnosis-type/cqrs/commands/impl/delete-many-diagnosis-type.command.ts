import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { DiagnosisTypeEntity } from '../../../entities/diagnosis-type.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyDiagnosisTypeCommand extends DeleteManyCommand<DiagnosisTypeEntity>{
  constructor(public request: GetOneDto<DiagnosisTypeEntity>) {
    super(request)
  }
}
