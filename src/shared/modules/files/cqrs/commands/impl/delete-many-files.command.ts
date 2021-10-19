import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FilesEntity } from '../../../entities/files.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFilesCommand extends DeleteManyCommand<FilesEntity>{
  constructor(public request: GetOneDto<FilesEntity>) {
    super(request)
  }
}
