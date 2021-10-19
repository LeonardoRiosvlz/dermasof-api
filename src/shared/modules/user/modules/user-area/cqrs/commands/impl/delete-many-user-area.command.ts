import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { UserAreaEntity } from '../../../entities/user-area.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyUserAreaCommand extends DeleteManyCommand<UserAreaEntity>{
  constructor(public request: GetOneDto<UserAreaEntity>) {
    super(request)
  }
}
