import { CreateMedicinesCommandHandler } from './handler/create-medicines-command.handler';
import { DeleteMedicinesCommandHandler } from './handler/delete-medicines-command.handler';
import { UpdateMedicinesCommandHandler } from './handler/update-medicines-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyMedicinesCommandHandler } from './handler/delete-many-medicines-command.handler';

export const MedicinesCommandHandlers: Array<Provider> = [
  CreateMedicinesCommandHandler,
  DeleteMedicinesCommandHandler,
  UpdateMedicinesCommandHandler,
  DeleteManyMedicinesCommandHandler
];
