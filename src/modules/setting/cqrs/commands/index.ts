import { CreateSettingCommandHandler } from './handler/create-setting-command.handler';
import { DeleteSettingCommandHandler } from './handler/delete-setting-command.handler';
import { UpdateSettingCommandHandler } from './handler/update-setting-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManySettingCommandHandler } from './handler/delete-many-setting-command.handler';

export const SettingCommandHandlers: Array<Provider> = [
  CreateSettingCommandHandler,
  DeleteSettingCommandHandler,
  UpdateSettingCommandHandler,
  DeleteManySettingCommandHandler
];
