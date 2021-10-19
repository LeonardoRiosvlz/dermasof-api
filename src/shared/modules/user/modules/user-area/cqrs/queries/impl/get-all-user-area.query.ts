import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { UserAreaEntity } from '../../../entities/user-area.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllUserAreaQuery extends GetAllQuery<UserAreaEntity>{
  constructor(public request: GetAllDto<UserAreaEntity>) {
    super(request)
  }
}
