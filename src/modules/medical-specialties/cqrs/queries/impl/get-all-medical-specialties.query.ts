import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { MedicalSpecialtiesEntity } from '../../../entities/medical-specialties.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllMedicalSpecialtiesQuery extends GetAllQuery<MedicalSpecialtiesEntity>{
  constructor(public request: GetAllDto<MedicalSpecialtiesEntity>) {
    super(request)
  }
}
