import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { MedicalSpecialtiesEntity } from '../../../entities/medical-specialties.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyMedicalSpecialtiesCommand extends DeleteManyCommand<MedicalSpecialtiesEntity>{
  constructor(public request: GetOneDto<MedicalSpecialtiesEntity>) {
    super(request)
  }
}
