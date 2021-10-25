import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { ConsultationTypeEntity } from '../../../entities/consultation-type.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneConsultationTypeQuery extends GetOneQuery<ConsultationTypeEntity>{
  constructor(public request: GetOneDto<ConsultationTypeEntity>) {
    super(request)
  }
}
