import { CommandHandler } from '@nestjs/cqrs';

import { CreateMedicinesCommand } from '../impl/create-medicines.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { MedicinesEntity } from '../../../entities/medicines.entity';
import { MedicinesEntityService } from '../../../services/medicines-entity.service';

@CommandHandler(CreateMedicinesCommand)
export class CreateMedicinesCommandHandler extends CreateCommandHandler<MedicinesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, MedicinesEntityService.name);
  }

}
