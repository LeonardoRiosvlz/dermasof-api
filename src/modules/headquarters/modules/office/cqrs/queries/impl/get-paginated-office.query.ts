import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { OfficeEntity } from '../../../entities/office.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedOfficeQuery extends GetPaginatedQuery<OfficeEntity>{
  constructor(public request: GetPaginatedDto<OfficeEntity>) {
    super(request)
  }
}
