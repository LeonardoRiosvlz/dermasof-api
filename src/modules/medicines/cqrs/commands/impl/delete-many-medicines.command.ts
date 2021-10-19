import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { MedicinesEntity } from '../../../entities/medicines.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyMedicinesCommand extends DeleteManyCommand<MedicinesEntity>{
  constructor(public request: GetOneDto<MedicinesEntity>) {
    super(request)
  }
}
