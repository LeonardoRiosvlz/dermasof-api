import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { HabeasDataEntity } from '../../../entities/habeas-data.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllHabeasDataQuery extends GetAllQuery<HabeasDataEntity>{
  constructor(public request: GetAllDto<HabeasDataEntity>) {
    super(request)
  }
}
