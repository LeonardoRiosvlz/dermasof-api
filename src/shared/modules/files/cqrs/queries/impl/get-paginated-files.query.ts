import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { FilesEntity } from '../../../entities/files.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedFilesQuery extends GetPaginatedQuery<FilesEntity>{
  constructor(public request: GetPaginatedDto<FilesEntity>) {
    super(request)
  }
}
