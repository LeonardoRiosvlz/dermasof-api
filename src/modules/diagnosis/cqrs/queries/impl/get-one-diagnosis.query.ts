import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { DiagnosisEntity } from '../../../entities/diagnosis.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneDiagnosisQuery extends GetOneQuery<DiagnosisEntity>{
  constructor(public request: GetOneDto<DiagnosisEntity>) {
    super(request)
  }
}
