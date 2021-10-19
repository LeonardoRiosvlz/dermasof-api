import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { FloorEntity } from '../../../entities/floor.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllFloorQuery extends GetAllQuery<FloorEntity>{
  constructor(public request: GetAllDto<FloorEntity>) {
    super(request)
  }
}
