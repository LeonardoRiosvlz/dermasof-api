import { AppQuery } from '../../../../app-cqrs/base/AppQuery';
import { UserEntity } from '../../../../user/entities/user.entity';


export class GetJwtQuery extends AppQuery {
  constructor(public request: UserEntity) {
    super();
  }
}
