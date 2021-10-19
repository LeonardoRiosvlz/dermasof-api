import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { __name__Entity } from '../../../entities/__name__(kebabCase).entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginated__name__Query extends GetPaginatedQuery<__name__Entity>{
  constructor(public request: GetPaginatedDto<__name__Entity>) {
    super(request)
  }
}
