import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { InformedConsentEntity } from '../../../entities/informed-consent.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneInformedConsentQuery extends GetOneQuery<InformedConsentEntity>{
  constructor(public request: GetOneDto<InformedConsentEntity>) {
    super(request)
  }
}
