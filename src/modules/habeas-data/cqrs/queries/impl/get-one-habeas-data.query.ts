import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { HabeasDataEntity } from '../../../entities/habeas-data.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneHabeasDataQuery extends GetOneQuery<HabeasDataEntity>{
  constructor(public request: GetOneDto<HabeasDataEntity>) {
    super(request)
  }
}
