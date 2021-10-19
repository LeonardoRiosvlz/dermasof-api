import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { DiagnosisEntity } from '../../../entities/diagnosis.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllDiagnosisQuery extends GetAllQuery<DiagnosisEntity>{
  constructor(public request: GetAllDto<DiagnosisEntity>) {
    super(request)
  }
}
