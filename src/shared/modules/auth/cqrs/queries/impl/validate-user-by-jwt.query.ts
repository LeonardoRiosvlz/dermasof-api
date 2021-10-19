import { AppQuery } from '../../../../app-cqrs/base/AppQuery';
import { ValidateUserByJwtDto } from '../../../types/validate-user-by-jwt.dto';


export class ValidateUserByJwtQuery extends AppQuery {
  constructor(public request: ValidateUserByJwtDto) {
    super();
  }
}
