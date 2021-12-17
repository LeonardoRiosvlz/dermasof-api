import { CreateFilesPhotographicReportCommandHandler } from './handler/create-files-photographic-report-command.handler';
import { DeleteFilesPhotographicReportCommandHandler } from './handler/delete-files-photographic-report-command.handler';
import { UpdateFilesPhotographicReportCommandHandler } from './handler/update-files-photographic-report-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyFilesPhotographicReportCommandHandler } from './handler/delete-many-files-photographic-report-command.handler';

export const FilesPhotographicReportCommandHandlers: Array<Provider> = [
  CreateFilesPhotographicReportCommandHandler,
  DeleteFilesPhotographicReportCommandHandler,
  UpdateFilesPhotographicReportCommandHandler,
  DeleteManyFilesPhotographicReportCommandHandler
];
