import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FilesEntity } from '../../../entities/files.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFilesQuery extends GetAllQuery<FilesEntity>{
  constructor(public request: GetAllDto<FilesEntity>) {
    super(request)
  }
}
