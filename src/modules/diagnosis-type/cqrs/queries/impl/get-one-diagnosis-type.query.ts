import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { DiagnosisTypeEntity } from '../../../entities/diagnosis-type.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneDiagnosisTypeQuery extends GetOneQuery<DiagnosisTypeEntity>{
  constructor(public request: GetOneDto<DiagnosisTypeEntity>) {
    super(request)
  }
}
