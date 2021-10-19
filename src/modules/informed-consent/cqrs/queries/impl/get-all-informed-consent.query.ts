import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { InformedConsentEntity } from '../../../entities/informed-consent.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllInformedConsentQuery extends GetAllQuery<InformedConsentEntity>{
  constructor(public request: GetAllDto<InformedConsentEntity>) {
    super(request)
  }
}
