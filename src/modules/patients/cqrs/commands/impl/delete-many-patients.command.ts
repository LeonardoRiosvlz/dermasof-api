import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { PatientsEntity } from '../../../entities/patients.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyPatientsCommand extends DeleteManyCommand<PatientsEntity>{
  constructor(public request: GetOneDto<PatientsEntity>) {
    super(request)
  }
}
