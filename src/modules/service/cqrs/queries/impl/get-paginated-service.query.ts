import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { ServiceEntity } from '../../../entities/service.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedServiceQuery extends GetPaginatedQuery<ServiceEntity>{
  constructor(public request: GetPaginatedDto<ServiceEntity>) {
    super(request)
  }
}
