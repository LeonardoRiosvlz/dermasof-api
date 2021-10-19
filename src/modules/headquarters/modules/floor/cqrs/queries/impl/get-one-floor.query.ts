import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { FloorEntity } from '../../../entities/floor.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneFloorQuery extends GetOneQuery<FloorEntity>{
  constructor(public request: GetOneDto<FloorEntity>) {
    super(request)
  }
}
