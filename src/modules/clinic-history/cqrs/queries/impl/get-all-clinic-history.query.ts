import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { ClinicHistoryEntity } from '../../../entities/clinic-history.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllClinicHistoryQuery extends GetAllQuery<ClinicHistoryEntity>{
  constructor(public request: GetAllDto<ClinicHistoryEntity>) {
    super(request)
  }
}
