import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { MedicalSpecialtiesEntity } from '../../../entities/medical-specialties.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedMedicalSpecialtiesQuery extends GetPaginatedQuery<MedicalSpecialtiesEntity>{
  constructor(public request: GetPaginatedDto<MedicalSpecialtiesEntity>) {
    super(request)
  }
}
