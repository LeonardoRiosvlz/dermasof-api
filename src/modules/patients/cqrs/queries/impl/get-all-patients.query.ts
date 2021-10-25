import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { PatientsEntity } from '../../../entities/patients.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllPatientsQuery extends GetAllQuery<PatientsEntity>{
  constructor(public request: GetAllDto<PatientsEntity>) {
    super(request)
  }
}
