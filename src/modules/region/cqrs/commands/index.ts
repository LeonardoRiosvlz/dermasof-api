import { CreateRegionCommandHandler } from './handler/create-region-command.handler';
import { DeleteRegionCommandHandler } from './handler/delete-region-command.handler';
import { UpdateRegionCommandHandler } from './handler/update-region-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyRegionCommandHandler } from './handler/delete-many-region-command.handler';

export const RegionCommandHandlers: Array<Provider> = [
  CreateRegionCommandHandler,
  DeleteRegionCommandHandler,
  UpdateRegionCommandHandler,
  DeleteManyRegionCommandHandler
];
