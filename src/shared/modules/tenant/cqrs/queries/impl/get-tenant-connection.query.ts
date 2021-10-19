import { AppQuery } from '../../../../app-cqrs/base/AppQuery';
import { ITenant } from '../../../../../core/interfaces/ITenant';


export class GetTenantConnectionQuery extends AppQuery{
  constructor(public tenant?: ITenant) {
    super()
  }
}
