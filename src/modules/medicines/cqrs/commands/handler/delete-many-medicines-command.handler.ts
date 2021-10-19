import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyMedicinesCommand } from '../impl/delete-many-medicines.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { MedicinesEntity } from '../../../entities/medicines.entity';
import { MedicinesEntityService } from '../../../services/medicines-entity.service';

@CommandHandler(DeleteManyMedicinesCommand)
export class DeleteManyMedicinesCommandHandler extends DeleteManyCommandHandler<MedicinesEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, MedicinesEntityService.name)
  }

}
