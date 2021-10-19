import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { MedicalSpecialtiesEntity } from '../../../entities/medical-specialties.entity';

export class UpdateMedicalSpecialtiesCommand extends UpdateCommand<MedicalSpecialtiesEntity> {
  constructor(public entityId: string, update: Partial<MedicalSpecialtiesEntity>) {
    super({entityId, update});
  }
}
