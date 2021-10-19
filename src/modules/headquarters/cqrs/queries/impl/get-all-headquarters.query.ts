import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { HeadquartersEntity } from '../../../entities/headquarters.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllHeadquartersQuery extends GetAllQuery<HeadquartersEntity>{
  constructor(public request: GetAllDto<HeadquartersEntity>) {
    super(request)
  }
}
