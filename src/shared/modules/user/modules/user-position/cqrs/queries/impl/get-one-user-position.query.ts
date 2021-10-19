import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { UserPositionEntity } from '../../../entities/user-position.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneUserPositionQuery extends GetOneQuery<UserPositionEntity>{
  constructor(public request: GetOneDto<UserPositionEntity>) {
    super(request)
  }
}
