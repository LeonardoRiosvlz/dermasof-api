import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { RegionEntity } from '../../../entities/region.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllRegionQuery extends GetAllQuery<RegionEntity>{
  constructor(public request: GetAllDto<RegionEntity>) {
    super(request)
  }
}
