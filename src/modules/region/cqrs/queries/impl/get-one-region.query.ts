import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { RegionEntity } from '../../../entities/region.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneRegionQuery extends GetOneQuery<RegionEntity>{
  constructor(public request: GetOneDto<RegionEntity>) {
    super(request)
  }
}
