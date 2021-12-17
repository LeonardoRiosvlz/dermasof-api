import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { ClinicalHistoryIndicationsEntity } from '../../../entities/clinical-history-indications.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllClinicalHistoryIndicationsQuery extends GetAllQuery<ClinicalHistoryIndicationsEntity>{
  constructor(public request: GetAllDto<ClinicalHistoryIndicationsEntity>) {
    super(request)
  }
}
