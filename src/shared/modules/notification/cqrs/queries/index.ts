import { GetAllNotificationQueryHandler } from './handler/get-all-notification-query.handler';
import { GetPaginatedNotificationQueryHandler } from './handler/get-paginated-notification-query.handler';
import { GetOneNotificationQueryHandler } from './handler/get-one-notification-query.handler';
import { Provider } from '@nestjs/common';

export const NotificationQueryHandlers:Array<Provider> = [
  GetAllNotificationQueryHandler,
  GetPaginatedNotificationQueryHandler,
  GetOneNotificationQueryHandler,
];
