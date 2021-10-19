import { GetAllSettingQueryHandler } from './handler/get-all-setting-query.handler';
import { GetPaginatedSettingQueryHandler } from './handler/get-paginated-setting-query.handler';
import { GetOneSettingQueryHandler } from './handler/get-one-setting-query.handler';
import { Provider } from '@nestjs/common';

export const SettingQueryHandlers:Array<Provider> = [
  GetAllSettingQueryHandler,
  GetPaginatedSettingQueryHandler,
  GetOneSettingQueryHandler,
];
