import { CommandHandler } from '@nestjs/cqrs';
import { UpdateMedicinesCommand } from '../impl/update-medicines.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { MedicinesEntityService } from '../../../services/medicines-entity.service';
import { MedicinesEntity } from '../../../entities/medicines.entity';

@CommandHandler(UpdateMedicinesCommand)
export class UpdateMedicinesCommandHandler extends UpdateCommandHandler<MedicinesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, MedicinesEntityService.name)
  }

}
