import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { MedicinesEntity } from '../../../entities/medicines.entity';

export class CreateMedicinesCommand extends CreateCommand<MedicinesEntity> {
  constructor(public request: MedicinesEntity) {
    super(request);
  }
}
