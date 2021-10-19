import { Create__name__CommandHandler } from './handler/create-__name__(kebabCase)-command.handler';
import { Delete__name__CommandHandler } from './handler/delete-__name__(kebabCase)-command.handler';
import { Update__name__CommandHandler } from './handler/update-__name__(kebabCase)-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteMany__name__CommandHandler } from './handler/delete-many-__name__(kebabCase)-command.handler';

export const __name__CommandHandlers: Array<Provider> = [
  Create__name__CommandHandler,
  Delete__name__CommandHandler,
  Update__name__CommandHandler,
  DeleteMany__name__CommandHandler
];
