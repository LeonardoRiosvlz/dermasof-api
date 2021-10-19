import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { HeadquartersEntity } from '../../../entities/headquarters.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneHeadquartersQuery extends GetOneQuery<HeadquartersEntity>{
  constructor(public request: GetOneDto<HeadquartersEntity>) {
    super(request)
  }
}
