import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { RoleEntity } from '../../../entities/role.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneRoleQuery extends GetOneQuery<RoleEntity>{
  constructor(public request: GetOneDto<RoleEntity>) {
    super(request)
  }
}
