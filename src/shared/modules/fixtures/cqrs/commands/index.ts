import { SetDefaultDataCommandHandler } from './handler/set-default-data-command.handler';
import { Provider } from '@nestjs/common';


export const FixturesCommandHandlers: Array<Provider> = [
  SetDefaultDataCommandHandler,

];
