import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { ServiceCategoryEntity } from '../../../entities/service-category.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneServiceCategoryQuery extends GetOneQuery<ServiceCategoryEntity>{
  constructor(public request: GetOneDto<ServiceCategoryEntity>) {
    super(request)
  }
}
