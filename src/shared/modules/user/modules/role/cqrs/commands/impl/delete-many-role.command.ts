import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { RoleEntity } from '../../../entities/role.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyRoleCommand extends DeleteManyCommand<RoleEntity>{
  constructor(public request: GetOneDto<RoleEntity>) {
    super(request)
  }
}
