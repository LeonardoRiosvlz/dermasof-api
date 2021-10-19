import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FilesEntity } from '../../../entities/files.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFilesQuery extends GetOneQuery<FilesEntity>{
  constructor(public request: GetOneDto<FilesEntity>, connection?: unknown) {
    super(request, connection)
  }
}
