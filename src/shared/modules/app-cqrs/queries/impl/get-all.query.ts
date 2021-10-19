import { IEntity } from '../../../../core/interfaces/IEntity';
import { AppQuery } from '../../base/AppQuery';
import { GetAllDto } from '../../../../dto/get-all.dto';


export class GetAllQuery<E extends IEntity> extends  AppQuery {
  constructor(public request: GetAllDto<E>, public connection?: unknown) {
    super()
  }
}
