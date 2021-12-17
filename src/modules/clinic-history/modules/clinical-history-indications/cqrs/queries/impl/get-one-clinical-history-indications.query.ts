import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { ClinicalHistoryIndicationsEntity } from '../../../entities/clinical-history-indications.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneClinicalHistoryIndicationsQuery extends GetOneQuery<ClinicalHistoryIndicationsEntity>{
  constructor(public request: GetOneDto<ClinicalHistoryIndicationsEntity>) {
    super(request)
  }
}
