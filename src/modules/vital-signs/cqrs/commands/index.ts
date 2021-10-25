import { CreateVitalSignsCommandHandler } from './handler/create-vital-signs-command.handler';
import { DeleteVitalSignsCommandHandler } from './handler/delete-vital-signs-command.handler';
import { UpdateVitalSignsCommandHandler } from './handler/update-vital-signs-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyVitalSignsCommandHandler } from './handler/delete-many-vital-signs-command.handler';

export const VitalSignsCommandHandlers: Array<Provider> = [
  CreateVitalSignsCommandHandler,
  DeleteVitalSignsCommandHandler,
  UpdateVitalSignsCommandHandler,
  DeleteManyVitalSignsCommandHandler
];
