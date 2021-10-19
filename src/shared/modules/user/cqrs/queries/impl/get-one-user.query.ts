import { GetOneDto } from 'src/shared/dto/get-one.dto';
import { UserEntity } from '../../../entities/user.entity';
import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';

export class GetOneUserQuery extends GetOneQuery<UserEntity> {
  constructor(public request: GetOneDto<UserEntity>) {
    super(request);
  }
}