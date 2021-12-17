import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { ClinicHistoryDiagnosisEntity } from '../../../entities/clinic-history-diagnosis.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneClinicHistoryDiagnosisQuery extends GetOneQuery<ClinicHistoryDiagnosisEntity>{
  constructor(public request: GetOneDto<ClinicHistoryDiagnosisEntity>) {
    super(request)
  }
}
