import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { UserPositionEntity } from '../../../entities/user-position.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllUserPositionQuery extends GetAllQuery<UserPositionEntity>{
  constructor(public request: GetAllDto<UserPositionEntity>) {
    super(request)
  }
}
