import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { UserAreaEntity } from '../../../entities/user-area.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneUserAreaQuery extends GetOneQuery<UserAreaEntity>{
  constructor(public request: GetOneDto<UserAreaEntity>) {
    super(request)
  }
}
