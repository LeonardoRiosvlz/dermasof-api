import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { FilesEntity } from '../../../entities/files.entity';

export class CreateFilesCommand extends CreateCommand<FilesEntity> {
  constructor(public request: FilesEntity) {
    super(request);
  }
}
