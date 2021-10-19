import { DeleteManyCommand } from '../../../../app-cqrs/commands/impl/delete-many.command';
import { UserEntity } from '../../../entities/user.entity';
import { GetOneDto } from '../../../../../dto/get-one.dto';

export class DeleteManyUserCommand extends DeleteManyCommand<UserEntity>{
  constructor(public request: GetOneDto<UserEntity>) {
    super(request)
  }
}
