import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { ServiceEntity } from '../../../entities/service.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneServiceQuery extends GetOneQuery<ServiceEntity>{
  constructor(public request: GetOneDto<ServiceEntity>) {
    super(request)
  }
}
