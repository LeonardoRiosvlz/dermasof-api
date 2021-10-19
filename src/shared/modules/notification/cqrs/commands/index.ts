import { DeleteNotificationCommandHandler } from './handler/delete-notification-command.handler';
import { UpdateNotificationCommandHandler } from './handler/update-notification-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyNotificationCommandHandler } from './handler/delete-many-notification-command.handler';
import { SendNotificationCommandHandler } from './handler/send-notification-command.handler';
import { SendEmailCommandCommandHandler } from './handler/send-email-command.handler';

export const NotificationCommandHandlers: Array<Provider> = [
  DeleteNotificationCommandHandler,
  UpdateNotificationCommandHandler,
  DeleteManyNotificationCommandHandler,
  SendNotificationCommandHandler,
  SendEmailCommandCommandHandler
];
