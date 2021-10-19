import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { HeadquartersEntity } from '../../../entities/headquarters.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedHeadquartersQuery extends GetPaginatedQuery<HeadquartersEntity>{
  constructor(public request: GetPaginatedDto<HeadquartersEntity>) {
    super(request)
  }
}
