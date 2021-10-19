import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { IndicationsPatientEntity } from '../../../entities/indications-patient.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllIndicationsPatientQuery extends GetAllQuery<IndicationsPatientEntity>{
  constructor(public request: GetAllDto<IndicationsPatientEntity>) {
    super(request)
  }
}
