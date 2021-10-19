import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { UserPositionEntity } from '../../../entities/user-position.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyUserPositionCommand extends DeleteManyCommand<UserPositionEntity>{
  constructor(public request: GetOneDto<UserPositionEntity>) {
    super(request)
  }
}
