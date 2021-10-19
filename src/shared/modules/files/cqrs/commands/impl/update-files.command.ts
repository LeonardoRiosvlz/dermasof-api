import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { FilesEntity } from '../../../entities/files.entity';

export class UpdateFilesCommand extends UpdateCommand<FilesEntity> {
  constructor(public entityId: string, update: Partial<FilesEntity>) {
    super({entityId, update});
  }
}
