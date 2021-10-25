import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { ConsultationTypeEntity } from '../../../entities/consultation-type.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedConsultationTypeQuery extends GetPaginatedQuery<ConsultationTypeEntity>{
  constructor(public request: GetPaginatedDto<ConsultationTypeEntity>) {
    super(request)
  }
}
