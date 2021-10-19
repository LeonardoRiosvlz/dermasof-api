import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { IndicationsPatientEntity } from '../../../entities/indications-patient.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyIndicationsPatientCommand extends DeleteManyCommand<IndicationsPatientEntity>{
  constructor(public request: GetOneDto<IndicationsPatientEntity>) {
    super(request)
  }
}
