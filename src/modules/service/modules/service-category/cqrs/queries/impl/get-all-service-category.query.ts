import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { ServiceCategoryEntity } from '../../../entities/service-category.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllServiceCategoryQuery extends GetAllQuery<ServiceCategoryEntity>{
  constructor(public request: GetAllDto<ServiceCategoryEntity>) {
    super(request)
  }
}
