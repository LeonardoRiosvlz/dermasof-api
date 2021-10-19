import { CreateInformedConsentCommandHandler } from './handler/create-informed-consent-command.handler';
import { DeleteInformedConsentCommandHandler } from './handler/delete-informed-consent-command.handler';
import { UpdateInformedConsentCommandHandler } from './handler/update-informed-consent-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyInformedConsentCommandHandler } from './handler/delete-many-informed-consent-command.handler';

export const InformedConsentCommandHandlers: Array<Provider> = [
  CreateInformedConsentCommandHandler,
  DeleteInformedConsentCommandHandler,
  UpdateInformedConsentCommandHandler,
  DeleteManyInformedConsentCommandHandler
];
