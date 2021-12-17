import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { ClinicHistoryDiagnosisEntity } from '../../../entities/clinic-history-diagnosis.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllClinicHistoryDiagnosisQuery extends GetAllQuery<ClinicHistoryDiagnosisEntity>{
  constructor(public request: GetAllDto<ClinicHistoryDiagnosisEntity>) {
    super(request)
  }
}
