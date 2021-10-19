import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { InformedConsentEntity } from '../../../entities/informed-consent.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedInformedConsentQuery extends GetPaginatedQuery<InformedConsentEntity>{
  constructor(public request: GetPaginatedDto<InformedConsentEntity>) {
    super(request)
  }
}
