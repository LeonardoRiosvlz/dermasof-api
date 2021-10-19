import { IEntity } from '../../../../core/interfaces/IEntity';
import { AppQuery } from '../../base/AppQuery';
import { GetPaginatedDto } from '../../../../dto/get-paginated.dto';

export class GetPaginatedQuery<E extends IEntity> extends  AppQuery {
  constructor(public request: GetPaginatedDto<E>, public connection?: unknown) {
    super()
  }
}