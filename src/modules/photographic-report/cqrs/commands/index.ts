import { CreatePhotographicReportCommandHandler } from './handler/create-photographic-report-command.handler';
import { DeletePhotographicReportCommandHandler } from './handler/delete-photographic-report-command.handler';
import { UpdatePhotographicReportCommandHandler } from './handler/update-photographic-report-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyPhotographicReportCommandHandler } from './handler/delete-many-photographic-report-command.handler';

export const PhotographicReportCommandHandlers: Array<Provider> = [
  CreatePhotographicReportCommandHandler,
  DeletePhotographicReportCommandHandler,
  UpdatePhotographicReportCommandHandler,
  DeleteManyPhotographicReportCommandHandler
];
