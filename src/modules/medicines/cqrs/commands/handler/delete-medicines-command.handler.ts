import { CommandHandler } from '@nestjs/cqrs';
import { DeleteMedicinesCommand } from '../impl/delete-medicines.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { MedicinesEntity } from '../../../entities/medicines.entity';
import { MedicinesEntityService } from '../../../services/medicines-entity.service';

@CommandHandler(DeleteMedicinesCommand)
export class DeleteMedicinesCommandHandler extends DeleteCommandHandler<MedicinesEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, MedicinesEntityService.name)
  }
}
