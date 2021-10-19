import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { IndicationsPatientEntity } from '../../../entities/indications-patient.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneIndicationsPatientQuery extends GetOneQuery<IndicationsPatientEntity>{
  constructor(public request: GetOneDto<IndicationsPatientEntity>) {
    super(request)
  }
}
