import { GetAllDto } from 'src/shared/dto/get-all.dto';
import { UserEntity } from '../../../entities/user.entity';
import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';

export class GetAllUsersQuery extends GetAllQuery<UserEntity>{
  constructor(public request: GetAllDto<UserEntity>) {
    super(request)
  }
}