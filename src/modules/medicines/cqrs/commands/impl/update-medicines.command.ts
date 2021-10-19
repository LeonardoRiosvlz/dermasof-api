import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { MedicinesEntity } from '../../../entities/medicines.entity';

export class UpdateMedicinesCommand extends UpdateCommand<MedicinesEntity> {
  constructor(public entityId: string, update: Partial<MedicinesEntity>) {
    super({entityId, update});
  }
}
