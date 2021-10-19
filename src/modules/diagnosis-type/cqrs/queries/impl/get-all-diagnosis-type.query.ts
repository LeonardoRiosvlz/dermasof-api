import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { DiagnosisTypeEntity } from '../../../entities/diagnosis-type.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllDiagnosisTypeQuery extends GetAllQuery<DiagnosisTypeEntity>{
  constructor(public request: GetAllDto<DiagnosisTypeEntity>) {
    super(request)
  }
}
