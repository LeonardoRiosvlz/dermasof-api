import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { ServiceEntity } from '../../../entities/service.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllServiceQuery extends GetAllQuery<ServiceEntity>{
  constructor(public request: GetAllDto<ServiceEntity>) {
    super(request)
  }
}
