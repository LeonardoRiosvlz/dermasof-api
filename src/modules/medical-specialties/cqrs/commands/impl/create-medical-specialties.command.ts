import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { MedicalSpecialtiesEntity } from '../../../entities/medical-specialties.entity';

export class CreateMedicalSpecialtiesCommand extends CreateCommand<MedicalSpecialtiesEntity> {
  constructor(public request: MedicalSpecialtiesEntity) {
    super(request);
  }
}
