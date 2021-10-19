import { IEntity } from '../../../../core/interfaces/IEntity';
import { AppQuery } from '../../base/AppQuery';
import { GetOneDto } from '../../../../dto/get-one.dto';

export class GetOneQuery<E extends IEntity> extends AppQuery {
  constructor(public request: GetOneDto<E>, public connection?: unknown) {
    super();
  }
}