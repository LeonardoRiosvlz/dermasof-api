import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { ConsultationTypeEntity } from '../../../entities/consultation-type.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllConsultationTypeQuery extends GetAllQuery<ConsultationTypeEntity>{
  constructor(public request: GetAllDto<ConsultationTypeEntity>) {
    super(request)
  }
}
