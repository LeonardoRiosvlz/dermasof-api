import { CreateClinicalHistoryIndicationsCommandHandler } from './handler/create-clinical-history-indications-command.handler';
import { DeleteClinicalHistoryIndicationsCommandHandler } from './handler/delete-clinical-history-indications-command.handler';
import { UpdateClinicalHistoryIndicationsCommandHandler } from './handler/update-clinical-history-indications-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyClinicalHistoryIndicationsCommandHandler } from './handler/delete-many-clinical-history-indications-command.handler';

export const ClinicalHistoryIndicationsCommandHandlers: Array<Provider> = [
  CreateClinicalHistoryIndicationsCommandHandler,
  DeleteClinicalHistoryIndicationsCommandHandler,
  UpdateClinicalHistoryIndicationsCommandHandler,
  DeleteManyClinicalHistoryIndicationsCommandHandler
];
