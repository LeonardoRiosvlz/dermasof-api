import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { RoleEntity } from '../../../entities/role.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllRoleQuery extends GetAllQuery<RoleEntity>{
  constructor(public request: GetAllDto<RoleEntity>) {
    super(request)
  }
}
