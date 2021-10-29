import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { ClinicHistoryEntity } from '../../../entities/clinic-history.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneClinicHistoryQuery extends GetOneQuery<ClinicHistoryEntity>{
  constructor(public request: GetOneDto<ClinicHistoryEntity>) {
    super(request)
  }
}
