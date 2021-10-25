import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { PatientsEntity } from '../../../entities/patients.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOnePatientsQuery extends GetOneQuery<PatientsEntity>{
  constructor(public request: GetOneDto<PatientsEntity>) {
    super(request)
  }
}
