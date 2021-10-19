import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { MedicalSpecialtiesEntity } from '../../../entities/medical-specialties.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneMedicalSpecialtiesQuery extends GetOneQuery<MedicalSpecialtiesEntity>{
  constructor(public request: GetOneDto<MedicalSpecialtiesEntity>) {
    super(request)
  }
}
